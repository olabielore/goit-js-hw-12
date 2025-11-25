import axios from 'axios';

const API_KEY = '53366292-8a86654a215d946083e2f4242';
const BASE_URL = 'https://pixabay.com/api/';

export const getImagesByQuery = async (query, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
