import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api/Api';
import Loader from 'components/Loader/Loader';
import {
  MovieDetailsBox,
  MovieInfoBox,
  StyledOverview,
  StyledUl,
  StyledLi,
  StyledTitle,
  StyledLink,
  StyledInfoTittle,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState('');
  const [genresMovie, setGenresMovie] = useState([]);
  const { movieId } = useParams();

  const location = useLocation();
  const goBack = location.state?.from ?? '/';

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

  if (!movieDetails) {
    return <div>Sorry,no information</div>;
  }

  return (
    <MovieDetailsBox>
      <MovieInfoBox>
        <div>
          <StyledLink to={goBack}>Go back</StyledLink>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            width="250"
          />
        </div>
        <StyledOverview>
          <StyledTitle>
            {title} ({releaseDate})
          </StyledTitle>
          <StyledUl>
            <StyledLi>
              <p>Rating: {rating}</p>
            </StyledLi>
            <StyledLi>
              <p>Overview: </p>
              <p>{overview}</p>
            </StyledLi>
            <StyledLi>
              <p>Genres: </p>
              <p>{genres}</p>
            </StyledLi>
          </StyledUl>
        </StyledOverview>
      </MovieInfoBox>
      <div>
        <StyledInfoTittle>Additional information</StyledInfoTittle>
        <StyledUl>
          <StyledLi>
            <StyledLink to="cast" state={{ from: goBack }}>
              Cast
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="reviews" state={{ from: goBack }}>
              Reviews
            </StyledLink>
          </StyledLi>
        </StyledUl>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieDetailsBox>
  );
}
