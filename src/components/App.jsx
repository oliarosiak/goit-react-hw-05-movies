import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout.jsx';

const HomePage = lazy(() => import('pages/HomePage.jsx'));
const MoviePage = lazy(() => import('pages/MoviePage.jsx'));
const MovieDetails = lazy(() => import('pages/MovieDetails.jsx'));
const NotFoundPage = lazy(() => import('./notFoundPage/NotFoundPage.jsx'));
const Cast = lazy(() => import('./cast/Cast.jsx'));
const Reviews = lazy(() => import('./reviews/Reviews.jsx'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
