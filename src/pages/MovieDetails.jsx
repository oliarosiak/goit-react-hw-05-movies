import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [score, setScore] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const movie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=184232349777783127dd9be9cacf5c3e`
      );
      return data;
    };

    movie().then(data => {
      const {
        title,
        poster_path,
        overview,
        genres,
        release_date,
        vote_average,
      } = data;

      console.log(data);

      setTitle(title);
      setYear(new Date(release_date).getFullYear());
      setPoster(poster_path);
      setOverview(overview);
      setGenres(genres);
      setScore(Math.round(vote_average * 10));
    });
  }, [movieId]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <img
          src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${poster}`}
          alt={title}
        />
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
      <div>
        <h4>Additional information</h4>
        <ul>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
