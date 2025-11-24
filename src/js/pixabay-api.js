import axios from 'axios';

const API_KEY = '53366292-8a86654a215d946083e2f4242';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
};
