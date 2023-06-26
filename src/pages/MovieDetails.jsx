import { Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from '../api/moviesApi.js';
import MovieMainInfo from 'components/movieMainInfo/MovieMainInfo.jsx';
import MovieAdditionalInfo from 'components/movieAdditionalInfo/MovieAdditionalInfo.jsx';
import BackLink from 'components/backLink/BackLink.jsx';
import Loader from 'components/loader/Loader.jsx';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');
  const [score, setScore] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieById(movieId).then(data => {
      const {
        title,
        poster_path,
        overview,
        genres,
        release_date,
        vote_average,
      } = data;

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
      <BackLink linkLocation={backLinkLocationRef.current} />
      <MovieMainInfo
        poster={poster}
        title={title}
        year={Number(year)}
        score={Number(score)}
        overview={overview}
        genres={genres}
      />
      <MovieAdditionalInfo />

      <Suspense fallback={<Loader />} >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
