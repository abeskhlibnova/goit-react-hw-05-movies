import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100vw;
  border-bottom: 1px solid black;
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  padding-left: 20px;

  &.active {
    color: green;
  }
`;
