import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from 'services/api/Api';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import MovieList from 'components/MoviesLists/MovieList';
// import Button from 'components/Button/Button';

export default function Movies() {
  const [search, setSearch] = useState('');
  //   const [page, setPage] = useState(1);
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
      //   setMovies(dataMovie);
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
    // setPage(1);
    setSearch(nextSearch);
    setMovies([]);
    setSearchParams({ searchQuery: nextSearch });
  };

  //   const loadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <SearchMovieForm onSubmit={handleSubmit} />
      <MovieList items={movies} />
      {/* <Button onClick={loadMore}>Load More</Button> */}
    </>
  );
}
// ///////////////////////////////////////////////////////

// export default function Movies() {
//   const [searchM, setSearchM] = useState('');
//   //   const [page, setPage] = useState(1);
//   const [moviesS, setMoviesS] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const search = searchParams.get('search');
//   const location = useLocation();

//   useEffect(() => {
//     if (searchM === '') {
//       return;
//     }
//     const fetchSearchMovies = async () => {
//       const searchMovies = await SearchMovies(search);
//       //   const resultMovies = await data.results;
//       setMoviesS(prevMovies => [...prevMovies, ...searchMovies.results]);
//     };
//     fetchSearchMovies(search);
//   }, [search, searchM]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const searchQuery = e.target.elements.search.value.toLowerCase();
//     if (searchQuery === '') {
//       setSearchParams({});

//       return alert('Please enter a search name.');
//     }
//     setSearchM(searchQuery);
//     setSearchParams({ search: searchQuery });
//   };

//   //   const loadMore = () => {
//   //     setPage(page => page + 1);
//   //   };

//   //   const isMovies = Boolean(moviesS.length);

//   return (
//     <>
//       <SearchMovieForm onSubmit={handleSubmit} />
//       <MoviesListSearch items={moviesS} location={location} />
//     </>
//   );
// }

// export default function Movies() {
//   //   const [search, setSearch] = useState([]);
//   const [page, setPage] = useState(1);
//   const [movies, setMovies] = useState([]);
//   const location = useLocation();

//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get('searchQuery');

//   useEffect(() => {
//     const fetchSearchMovies = async () => {
//       const searchMovies = await SearchMovies(searchQuery, page);
//       //   const resultMovies = await data.results;
//       setMovies(prevMovies => [...prevMovies, ...searchMovies.results]);
//     };
//     if (searchQuery) {
//       fetchSearchMovies();
//     }
//   }, [searchQuery, page]);

//   const onSearch = ({ search }) => {
//     setSearchParams({ searchQuery: search });
//     setPage(1);
//     setMovies([]);
//   };

//   const loadMore = () => setPage(prevPage => prevPage + 1);

//   const isMovies = Boolean(movies.length);

//   return (
//     <>
//       <SearchMovieForm onSubmit={onSearch} />
//       <MoviesListSearch items={movies} location={location} />
//       {isMovies && <Button onClick={loadMore}>Load More</Button>}
//     </>
//   );
// }

// export default function Movies() {
//   const [search, setSearch] = useState('');
//   const [page, setPage] = useState(1);
//   const [movies, setMovies] = useState([]);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const filter = searchParams.get('filter') ?? '';
//   const location = useLocation();

//   useEffect(() => {
//     if (search === '') {
//       return;
//     }
//     const fetchSearchMovies = async () => {
//       const searchMovies = await SearchMovies(search, page);
//       //   const dataMovie = searchMovies.results;
//       setMovies(prevMovies => [...prevMovies, ...searchMovies.results]);
//       //   setMovies(dataMovie);
//     };
//     fetchSearchMovies(search, page);
//   }, [search, page]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     const nextSearch = e.target.elements.search.value.toLowerCase();
//     if (search === nextSearch) {
//       setSearchParams('');
//       alert('Please enter a search name.');
//       return;
//     }
//     setPage(1);
//     setSearch(nextSearch);
//     setMovies([]);
//     setSearchParams({ filter: nextSearch });
//   };
//   return (
//     <>
//       <SearchMovieForm onSubmit={handleSubmit} />
//       <MoviesListSearch items={movies} location={location} />
//     </>
//   );
// }
