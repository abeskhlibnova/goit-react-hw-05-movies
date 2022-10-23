import axios from 'axios';

export default function TrendingMovies() {}

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '';

export const fetchImages = async (search, page) => {
  const key = '29337037-f6a5fd668b35f8f6ea13ad624';
  const response = await axios.get(
    `/?key=${key}&q=${search}&page=${page}&image_type=photo&orientation=horizontal&per_page=12&`
  );
  return response.data;
};
