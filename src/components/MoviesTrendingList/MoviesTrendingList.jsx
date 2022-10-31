// import PropTypes
import { Link } from 'react-router-dom';

const MoviesTrendingList = ({ items, location }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`movies/${id}`}>{title}</Link>
    </li>
  ));

  return <ul> {elements}</ul>;
};

export default MoviesTrendingList;
