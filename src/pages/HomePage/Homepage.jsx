import React, { useEffect, useState } from 'react';
import { TrendingMovies } from 'services/api/Api';
import MovieList from 'components/MoviesLists/MovieList';
import { TitleHome } from './HomePage.styled';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

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
      <TitleHome>Trending Movies Today</TitleHome>
      <MovieList items={movies} />
    </>
  );
}
