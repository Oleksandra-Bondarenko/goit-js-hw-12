import axios from 'axios';

const API_KEY = '57566280-4551ff72abb6b2c46ea49083b';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 9,
      },
    })
    .then(response => response.data);
}
