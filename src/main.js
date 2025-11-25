import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let query = '';
let currentPage = 1;
let totalHits = 0;

const galleryEl = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loaderButton = document.querySelector('.loader-button');

const onSubmit = async event => {
  event.preventDefault();

  const input = event.target.elements['search-text'];
  const value = input.value.trim();
  query = value;

  if (value === '') {
    iziToast.error({
      title: 'Please enter search text.',
      position: 'topRight',
    });
    return;
  }

  currentPage = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(value, currentPage);
    console.log('test', data);

    if (data.totalHits === 0) {
      iziToast.warning({
        title:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      hideLoader();
      return;
    }

    createGallery(data.hits);
    hideLoader();
    input.value = '';

    if (data.totalHits > 15) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Server error try later',
      position: 'topRight',
    });
    hideLoader();
  }
};

const onLoaderBtnClick = async event => {
  try {
    currentPage++;

    const data = await getImagesByQuery(query, currentPage);
    createGallery(data.hits);

    const galleryCardHeitht = galleryEl
      .querySelector('li')
      .getBoundingClientRect().height;

    scrollBy({
      top: galleryCardHeitht * 2,
      behavior: 'smooth',
    });

    const totalPages = Math.ceil(data.totalHits / 15);

    if (currentPage >= totalPages) {
      hideLoadMoreButton();

      iziToast.info({
        title: "We're reached the end of search results",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    console.log(error);
  }
};

form.addEventListener('submit', onSubmit);
loaderButton.addEventListener('click', onLoaderBtnClick);
