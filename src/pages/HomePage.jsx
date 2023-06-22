import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { movieApi } from '../api/movieApi';

const HomePage = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    movieApi().then(data => {
      const { results } = data;
    //   console.log(results);
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
