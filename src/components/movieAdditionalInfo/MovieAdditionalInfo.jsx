import {
  AdditionalContainer,
  AdditionalTitle,
  AdditionalList,
  AdditionalItem,
  AdditionalLink
} from './MovieAdditionalInfo.styled';

const MovieAdditionalInfo = () => (
  <AdditionalContainer>
    <AdditionalTitle>Additional information</AdditionalTitle>
    <AdditionalList>
      <AdditionalItem>
        <AdditionalLink to="cast">Cast</AdditionalLink>
      </AdditionalItem>
      <AdditionalItem>
        <AdditionalLink to="reviews">Reviews</AdditionalLink>
      </AdditionalItem>
    </AdditionalList>
  </AdditionalContainer>
);

export default MovieAdditionalInfo;
