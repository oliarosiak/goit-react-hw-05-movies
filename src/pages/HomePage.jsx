import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { trendMoviesApi } from '../api/moviesApi';
import TrandMoviesList from '../components/trandMoviesList/TrandMoviesList';

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    trendMoviesApi().then(data => {
      const { results } = data;    
      setTrandingMovies(results);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <TrandMoviesList movies={trandingMovies} />
      <Outlet />
    </div>
  );
};

export default HomePage;
