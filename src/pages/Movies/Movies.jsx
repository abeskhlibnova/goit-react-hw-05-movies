import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'services/api/Api';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import MovieList from 'components/MoviesLists/MovieList';
import { MovieWrapper } from './Movies.styled';

export default function Movies() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  useEffect(() => {
    if (!movies) {
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
    const nextSearch = e.target.elements.search.value.toLowerCase();
    if (search === nextSearch) {
      setSearchParams('');
      alert('Please enter a search name.');
      return;
    }
    setSearch(nextSearch);
    setMovies([]);
    setSearchParams({ searchQuery: nextSearch });
  };

  return (
    <MovieWrapper>
      <SearchMovieForm onSubmit={handleSubmit} />
      {searchQuery === null && <p>Please, enter something in form above</p>}
      {searchQuery !== null && <MovieList items={movies} />}
    </MovieWrapper>
  );
}
