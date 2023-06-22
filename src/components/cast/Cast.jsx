import { useParams } from 'react-router-dom';
import { getCastById } from '../../api/moviesApi.js';
import { useEffect, useState } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastById(movieId).then(data => {     
      const { cast } = data;
      setCast(cast);
    });
  }, [movieId]);

  console.log(cast);
  return (
    <ul>
      {cast.map(({ cast_id, name, character, profile_path }) => (
        <li key={cast_id}>
          <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${profile_path}`} alt={name} />
          <p>Actor:{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
