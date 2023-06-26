import PropTypes from 'prop-types';

const MovieInformation = ({ poster, title, year, score, overview, genres }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const imageUrl =
    poster === null
      ? 'https://screench.com/upload/no-poster.jpeg'
      : `${IMAGE_BASE_URL}${poster}`; 
  
  return (
    <div style={{ display: 'flex' }}>
      <img src={imageUrl} alt={title} width={150} />
      <div>
        <h3>
          {title} ({year})
        </h3>
        <p>Use score: {score}%</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>
          {genres.map(({ name }) => (
            <span key={name}>{name}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

MovieInformation.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MovieInformation;
