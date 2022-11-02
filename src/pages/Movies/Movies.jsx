import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'services/api/Api';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import MovieList from 'components/MoviesLists/MovieList';
import { MovieWrapper } from './Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    const fetchSearchMovies = async () => {
      const searchMovies = await SearchMovies(searchQuery);
      const dataMovie = searchMovies.results;
      setMovies(dataMovie);
    };
    if (searchQuery) {
      fetchSearchMovies();
    }
  }, [searchQuery, movies]);

  const handleSubmit = e => {
    e.preventDefault();
    const nextSearch = e.target.elements.searchQuery.value.toLowerCase();
    if (nextSearch === '') {
      setSearchParams({});
      alert('Please enter a search name.');
      return;
    }
    setSearchParams({ searchQuery: nextSearch });
  };

  const changeFilter = value => {
    setSearchParams(value !== '' ? { searchQuery: value } : {});
  };

  return (
    <MovieWrapper>
      <SearchMovieForm onSubmit={handleSubmit} onChange={changeFilter} />
      {searchQuery === null && <p>Please, enter something in form above</p>}
      {searchQuery !== null && <MovieList items={movies} />}
    </MovieWrapper>
  );
}
