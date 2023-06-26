import { useEffect, useState } from 'react';
import { searchMovies } from '../api/moviesApi.js';
import { useSearchParams, useLocation } from 'react-router-dom';
import MovieForm from 'components/searchMovieForm/MovieForm.jsx';
import MoviesList from 'components/movieList/MoviesList.jsx';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userInput = searchParams.get('userInput') ?? '';
  const [findingMovies, setFindingMovies] = useState([]);
  const location = useLocation();

  const formHandler = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.query.value;

    if (query.trim() === '') {
      alert('need movie name');
      form.reset();
      return;
    }

    setSearchParams({ userInput: query });
    form.reset();
  };

  useEffect(() => {
    if (!userInput) {
      return;
    }
    searchMovies(userInput).then(data => {
      const { results } = data;
      setFindingMovies(results);
    });
  }, [userInput]);

  return (
    <div>
      <MovieForm onSubmit={formHandler} />
      <MoviesList movies={findingMovies} location={location} />
    </div>
  );
};

export default MoviePage;
