import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;

export const MovieInfoBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  color: rgba(66, 27, 146);
  border: 1px solid white;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  width: 150px;
  height: 40px;
  margin: 20px;
`;
export const StyledOverview = styled.div`
  margin-left: 50px;
`;
export const StyledUl = styled.ul`
  width: 50%;
`;

export const StyledLi = styled.li`
  /* display: flex; */
  margin-bottom: 30px;
`;
export const StyledTitle = styled.h2``;

export const StyledLink = styled(Link)`
  color: rgba(66, 27, 146);
  border: 1px solid white;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: 700;
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
`;

export const StyledInfoTittle = styled.h3``;
