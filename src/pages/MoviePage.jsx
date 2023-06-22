import { useEffect, useState } from 'react';
import { searchMovies } from '../api/moviesApi.js';

const MoviePage = () => {
  const [query, setQuery] = useState('');

  const submitHeandler = event => {
    event.preventDefault();
    const { query } = event.target.elements;    
    if (query.value.trim() === '') {
      alert('need movie name');
      return;
    }
    setQuery(query.value);
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovies(query).then(res => console.log(res));
  }, [query]);

  return (
    <form onSubmit={submitHeandler}>
      <button type="submit">search</button>
      <input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie name"
      />
    </form>
  );
};

export default MoviePage;

// const handleInput = event =>
//   setQuery(event.currentTarget.value.toLowerCase());

// value={query}
// onChange={handleInput}
