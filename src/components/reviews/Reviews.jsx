import { useEffect, useState } from 'react';
import { getReviewsById } from '../../api/moviesApi.js';
import { useParams } from 'react-router-dom';
import NoReviews from './NoReviews.jsx';

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
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <h4>Author:{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
