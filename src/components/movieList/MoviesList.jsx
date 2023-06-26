import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
