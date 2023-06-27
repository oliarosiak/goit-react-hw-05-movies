import PropTypes from 'prop-types';
import { PiFilmSlateThin } from "react-icons/pi";
import { ListContainer, StyledLink } from './MoviesList.styled';

const MoviesList = ({ movies, location }) => (
  <ListContainer>
    {movies.map(({ id, title }) => (
      <StyledLink key={id} to={`/movies/${id}`} state={{ from: location }}>
        <PiFilmSlateThin/>{title}
      </StyledLink>
    ))}
  </ListContainer>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
