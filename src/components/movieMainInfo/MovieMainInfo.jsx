import PropTypes from 'prop-types';
import { InfoContainer, InfoBlock, InfoTitle, InfoSubtitle, InfoText, InfoSubtext } from './MovieMainInfo.styled';

const MovieInformation = ({ poster, title, year, score, overview, genres }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  const imageUrl =
    poster === null
      ? 'https://screench.com/upload/no-poster.jpeg'
      : `${IMAGE_BASE_URL}${poster}`; 
  
  return (
    <InfoContainer>
      <img src={imageUrl} alt={title} width={250} />
      <InfoBlock>
        <InfoTitle>
          {title} ({year})
        </InfoTitle>
        <InfoText>Use score: {score}%</InfoText>
        <InfoSubtitle>Overview</InfoSubtitle>
        <InfoText>{overview}</InfoText>
        <InfoSubtitle>Genres</InfoSubtitle>
        <InfoText>
          {genres.map(({ name }) => (
            <InfoSubtext key={name}>{name}</InfoSubtext>
          ))}
        </InfoText>
      </InfoBlock>
    </InfoContainer>
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
