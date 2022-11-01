import { useState, useEffect } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api/Api';
import {
  MovieDetailsBox,
  MovieInfoBox,
  StyledOverview,
  Button,
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

  if (!movieDetails) {
    return <div>Sorry,no information</div>;
  }

  return (
    <MovieDetailsBox>
      <MovieInfoBox>
        <div>
          <Button onClick={goBack}>Go back</Button>
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
            <StyledLink to={'cast'}>Cast - click to see more</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to={'reviews'}>Reviews - click to see more</StyledLink>
          </StyledLi>
        </StyledUl>
      </div>

      <Outlet />
    </MovieDetailsBox>
  );
}
