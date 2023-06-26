import { Link } from 'react-router-dom';

const MovieAdditionalInfo = () => (
  <div>
    <h4>Additional information</h4>
    <ul>
      <li>
        <Link to="cast">Cast</Link>
      </li>
      <li>
        <Link to="reviews">Reviews</Link>
      </li>
    </ul>
  </div>
);

export default MovieAdditionalInfo;
