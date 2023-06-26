import { useParams } from 'react-router-dom';
import { getCastById } from '../../api/moviesApi.js';
import { useEffect, useState } from 'react';
import NoCast from './NoCast.jsx';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

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
        {cast.map(({ cast_id, name, character, profile_path }) => (
          <li key={cast_id}>
            <img
              src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${profile_path}`}
              alt={name}
            />
            <p>Actor:{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
