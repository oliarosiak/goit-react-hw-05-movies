import { useEffect, useState } from 'react';
import { getReviewsById } from '../../api/moviesApi.js';
import { useParams } from 'react-router-dom';
import NoReviews from './NoReviews.jsx';
import { ReviewsList, ReviewsItem, ReviewsTitle, ReviewsText } from './Reviews.styled.js';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    getReviewsById(movieId).then(data => {
      const { results } = data;

      if (results.length === 0) {
        return setIsEmpty(true);
      }
      
      setReviews(results);
    });
  }, [movieId]);

  return (
    <div>
      {isEmpty && <NoReviews />}     
      <ReviewsList>
        {reviews.map(({ author, content, id }) => (
          <ReviewsItem key={id}>
            <ReviewsTitle>Author: {author}</ReviewsTitle>
            <ReviewsText>{content}</ReviewsText>
          </ReviewsItem>
        ))}
      </ReviewsList>
    </div>
  );
};

export default Reviews;
