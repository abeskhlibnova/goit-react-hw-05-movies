import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '3f2d31305f219bdee541e24a029138c5';

export const TrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const SearchMovies = async search => {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieCredits = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const MovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
