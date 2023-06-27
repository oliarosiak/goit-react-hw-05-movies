import { MdRecentActors, MdOutlineReviews } from 'react-icons/md';
import {
  AdditionalContainer,
  AdditionalTitle,
  AdditionalList,
  AdditionalItem,
  AdditionalLink,
} from './MovieAdditionalInfo.styled';

const MovieAdditionalInfo = () => (
  <AdditionalContainer>
    <AdditionalTitle>Additional information</AdditionalTitle>
    <AdditionalList>
      <AdditionalItem>
        <AdditionalLink to="cast"><MdRecentActors /> Cast</AdditionalLink>
      </AdditionalItem>
      <AdditionalItem>
        <AdditionalLink to="reviews"><MdOutlineReviews/> Reviews</AdditionalLink>
      </AdditionalItem>
    </AdditionalList>
  </AdditionalContainer>
);

export default MovieAdditionalInfo;
