import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader-wrapper');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${image.largeImageURL}">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
            </a>

            <div class="info">
              <p class="info-item">
                Likes
                <span>${image.likes}</span>
              </p>

              <p class="info-item">
                Views
                <span>${image.views}</span>
              </p>

              <p class="info-item">
                Comments
                <span>${image.comments}</span>
              </p>

              <p class="info-item">
                Downloads
                <span>${image.downloads}</span>
              </p>
            </div>
        </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}
