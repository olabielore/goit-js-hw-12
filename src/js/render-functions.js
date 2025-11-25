import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loaderWrapper = document.querySelector('.loader-wrapper');
const loaderButton = document.querySelector('.loader-button');
const galleryEl = document.querySelector('.gallery');

export function showLoader() {
  loaderWrapper.classList.remove('hidden');
}
export function hideLoader() {
  loaderWrapper.classList.add('hidden');
}

export function showLoadMoreButton() {
  loaderButton.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
  loaderButton.classList.add('is-hidden');
}

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
  const markup = images
    .map(image => {
      console.log(image);
      return `<li class="gallery-item">
	<a class="gallery-link" href="${image.largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${image.webformatURL}" 
		  alt="${image.tags}" 
		/>
	</a>
  <ul class="gallery-list">
    <li class="section">
      <p class="list-paragraph">Likes</p>
      <p class="list-section">${image.likes}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Views</p>
    <p class="list-section">${image.views}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Comments</p>
      <p class="list-section">${image.comments}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Downloads</p>
      <p class="list-section">${image.downloads}</p>
    </li>
    </ul>
</li>
`;
    })
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}
