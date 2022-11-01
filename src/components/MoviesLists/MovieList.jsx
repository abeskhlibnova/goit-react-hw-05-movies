import { Link, useLocation } from 'react-router-dom';
import { StyledLink, MovieItem } from './MoviesList.styled';

const MovieList = ({ items }) => {
  const location = useLocation();
  return (
    <ul key={items.id}>
      {items.map(({ id, title }) => (
        <MovieItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </MovieItem>
      ))}
    </ul>
  );
};

export default MovieList;
