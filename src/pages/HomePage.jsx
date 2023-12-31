import { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { trendMoviesApi } from '../api/moviesApi';
import MoviesList from 'components/movieList/MoviesList';
import Loader from 'components/loader/Loader.jsx';

const mainHeader = {
  textTransform: 'uppercase',
  textShadow: '2px 2px 4px var(--shadow-color)',
  color: 'var(--main-text-color)',
};

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    trendMoviesApi().then(data => {
      const { results } = data;
      setTrandingMovies(results);
    });
  }, []);

  return (
    <div>
      <h1 style={mainHeader}>Trending today</h1>
      <MoviesList movies={trandingMovies} location={location} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HomePage;
