import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: white;

  &:hover {
    color: violet;
  }
`;
export const MoviesList = styled.ul``;

export const MovieItem = styled.li`
  list-style: disc;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;
