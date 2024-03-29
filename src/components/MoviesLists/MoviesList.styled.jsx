import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  color: rgba(66, 27, 146);
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    color: violet;
  }
`;

export const StyledImg = styled.img`
  margin-right: 20px;
`;
export const MoviesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const MovieItem = styled.li`
  width: 20%;
  color: black;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid white;
  margin-bottom: 20px;
  margin-right: 30px;
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 20px;
  overflow: hidden;
`;
