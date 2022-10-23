import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export default function UserRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="user" element={<div>User</div>} />
          <Route path="movies" element={<div>Movies</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

// <Route path="/" element={<SharedLayout />}></Route>
// <Route index element={<HomePage />} />
// <Route path="/movies" element={<Movies />} />
// <Route path="/movies/:movieId" element={<MovieDetails />}>
//   <Route path="cast" element={<Cast />} />
//   <Route path="reviews " element={<Reviews />} />
// </Route>
// <Route path="*" element={<NotFoundPage />} />
