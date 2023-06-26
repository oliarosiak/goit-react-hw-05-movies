import { useParams } from 'react-router-dom';
import { getCastById } from '../../api/moviesApi.js';
import { useEffect, useState } from 'react';
import NoCast from './NoCast.jsx';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getCastById(movieId).then(data => {
      const { cast } = data;

      if (cast.length === 0) {
        return setIsEmpty(true);
      }

      setCast(cast);
    });
  }, [movieId]);

  return (
    <div>
      {isEmpty && <NoCast />}
      <ul>
        {cast.map(({ cast_id, name, character, profile_path }) => {
          const imageUrl =
            profile_path === null
              ? 'https://static8.depositphotos.com/1009634/988/v/450/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg'
              : `${IMAGE_BASE_URL}${profile_path}`;
          return (
            <li key={cast_id}>
              <img src={imageUrl} alt={name} width={150} />
              <p>Actor:{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
