import { useEffect, useState } from 'react';
import { searchMovies } from '../api/moviesApi.js';
import {
  Link,
  useSearchParams,
  useLocation,
  // useNavigate,
} from 'react-router-dom';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userInput = searchParams.get('userInput') ?? '';
  const [findingMovies, setFindingMovies] = useState([]);
  const location = useLocation();
  // const navigate = useNavigate();

  // console.log(navigate);

  const formHandler = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.query.value;

    if (query.trim() === '') {
      alert('need movie name');
      form.reset();
      return;
    }

    // navigate({
    //   pathname: location.pathname,
    //   search: `userInput=${userInput}`,
    // });

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

  console.log(location);

  return (
    <div>
      <form onSubmit={formHandler}>
        <button type="submit">search</button>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name"
        />
      </form>
      <ul>
        {findingMovies.map(({ id, title }) => (
          <Link
            key={id}
            to={`/movies/${id}`}
            state={{ from: location }}
            // state={{
            //   from: { path: location.pathname + location.search },
            //   data: findingMovies,
            // }}
          >
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MoviePage;

// const handleInput = event =>
//   setQuery(event.currentTarget.value.toLowerCase());

// value={query}
// onChange={handleInput}

//onSubmit={submitHeandler}

// useEffect(() => {
//   if (!query) {
//     return;
//   }
//   searchMovies(query).then(res => console.log(res));
// }, [query]);

//   const [query, setQuery] = useState('');
//
// const input = searchParams.get('input');
// const query = searchParams.get('query');

// console.log(input);
// console.log(query);

// const submitHeandler = event => {
//   event.preventDefault();
//   const { query } = event.target.elements;

//   if (query.value.trim() === '') {
//     alert('need movie name');
//     return;
//   }
//  setSearchParams({ query: query.value });

//   setQuery(query.value);

// };

// console.log('query', query);
