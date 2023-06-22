import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '184232349777783127dd9be9cacf5c3e';
const defaultSettings = 'trending/movie/day';

export async function movieApi() {
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

//https://api.themoviedb.org/3/movie/550?api_key=184232349777783127dd9be9cacf5c3e
