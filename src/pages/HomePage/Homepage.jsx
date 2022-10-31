import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TrendingMovies } from 'services/api/Api';
import MoviesTrendingList from 'components/MoviesTrendingList/MoviesTrendingList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await TrendingMovies();
      const moviesData = await data.results;
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div>Trending Movies Today</div>
      <MoviesTrendingList items={movies} location={location} />
    </>
  );
}
