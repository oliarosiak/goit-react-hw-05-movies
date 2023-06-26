import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '184232349777783127dd9be9cacf5c3e';
const defaultSettings = 'trending/movie/day';

export async function trendMoviesApi() {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${defaultSettings}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMovieById(id) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCastById(id) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getReviewsById(id) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function searchMovies(query) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
