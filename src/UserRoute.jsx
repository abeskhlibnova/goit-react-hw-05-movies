import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import HomePage from 'pages/HomePage/Homepage';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export default function UserRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
