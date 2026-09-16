import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more-btn');

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleClick);

let currentPage = 1;
let currentQuery = '';

async function handleSubmit(event) {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (!searchQuery) {
    return;
  }

  currentQuery = searchQuery;
  currentPage = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        theme: 'dark',
      });

      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / 15);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        theme: 'dark',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      theme: 'dark',
    });
  } finally {
    hideLoader();
    event.currentTarget.reset();
  }
}

async function handleClick() {
  currentPage += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / 15);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        theme: 'dark',
      });
    }

    const galleryItem = gallery.querySelector('.gallery-item');

    if (galleryItem) {
      const itemHeight = galleryItem.getBoundingClientRect().height;

      window.scrollBy({
        top: itemHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      theme: 'dark',
    });

    currentPage -= 1;
  } finally {
    hideLoader();
  }
}
