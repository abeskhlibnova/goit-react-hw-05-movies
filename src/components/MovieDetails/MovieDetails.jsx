import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api/Api';
import { Link } from 'react-router-dom';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState('');
  const [genresMovie, setGenresMovie] = useState([]);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      const movieInfo = await fetchMovieDetails(movieId);
      setMovieDetails(movieInfo);
      setGenresMovie(movieInfo.genres);
    };
    fetchMovie();
  }, [movieId]);

  const { title, poster_path, release_date, overview, vote_average } =
    movieDetails;

  const data = new Date(release_date);
  const releaseDate = data.getFullYear();
  const vote = Number(vote_average);
  const rating = vote.toFixed(2);

  const genres = genresMovie.map(item => item.name).join(', ');

  const goBack = () => navigate(-1);
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="250"
      />
      <div>
        <h2>
          {title} ({releaseDate})
        </h2>
        <ul>
          <li>
            <p>Rating: </p>
            <p>{rating}</p>
          </li>
          <li>
            <p>Overview: </p>
            <p>{overview}</p>
          </li>
          <li>
            <p>Genres: </p>
            <p>{genres}</p>
          </li>
          <li></li>
        </ul>
      </div>

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Link</Link>
        </li>
        <li>
          <Link to="reviews">Reviews: </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
