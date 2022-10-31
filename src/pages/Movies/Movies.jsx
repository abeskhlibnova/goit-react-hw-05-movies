import { useEffect, useState } from 'react';
import { SearchMovies } from 'services/api/Api';
import MoviesTrendingList from 'components/MoviesTrendingList/MoviesTrendingList';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import { Outlet } from 'react-router-dom';

export default function Movies() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search === '') {
      return;
    }
    const fetchSearchMovies = async () => {
      const searchMovies = await SearchMovies(search, page);
      setMovies(prevMovies => [...prevMovies, ...searchMovies.results]);
    };
    fetchSearchMovies(search, page);
  }, [search, page]);

  const handleSubmit = e => {
    e.preventDefault();
    const nextSearch = e.target.elements.search.value.toLowerCase();
    if (search === nextSearch) {
      return;
    }
    setPage(1);
    setSearch(nextSearch);
    setMovies([]);
  };

  return (
    <div>
      <SearchMovieForm onSubmit={handleSubmit} />
      <MoviesTrendingList items={movies} />
    </div>
  );
}
