import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { trendMoviesApi } from '../api/moviesApi';

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
      <ul>
        {trandingMovies.map(({ id, title }) => (
          <Link key={id} to={`/movies/${id}`}>
            {title}
          </Link>
        ))}
      </ul>

      <Outlet />
    </div>
  );
};

export default HomePage;
