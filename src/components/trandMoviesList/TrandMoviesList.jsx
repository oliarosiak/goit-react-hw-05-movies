import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrandMoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link key={id} to={`/movies/${id}`} state={{ from: '/' }}>
          {title}
        </Link>
      ))}
    </ul>
  );
};

TrandMoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrandMoviesList;
