import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  StyledLink,
  MoviesList,
  MovieItem,
  StyledImg,
} from './MoviesList.styled';

const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <MoviesList key={items.id}>
      {items.map(({ id, title, poster_path }) => (
        <MovieItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <StyledImg
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width="100"
            />
            {title}
          </StyledLink>
        </MovieItem>
      ))}
    </MoviesList>
  );
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
