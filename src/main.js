import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

const onSubmit = event => {
  event.preventDefault();
  const input = event.target.elements['search-text'];
  const value = input.value.trim();

  if (value === '') {
    iziToast.error({
      title: 'Please enter search text.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(value)
    .then(images => {
      if (images.length === 0) {
        iziToast.warning({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        hideLoader();
        return;
      }
      input.value = '';

      createGallery(images);
      hideLoader();
    })
    .catch(err => {
      iziToast.error({
        title: 'Server error try later',
        position: 'topRight',
      });
      hideLoader();
    });
};

form.addEventListener('submit', onSubmit);
