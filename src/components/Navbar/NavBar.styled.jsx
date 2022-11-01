import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  background: linear-gradient(
    45deg,
    rgba(66, 27, 146, 0.7) 23%,
    rgba(156, 48, 58, 0.7)
  );
  box-shadow: 11px 11px 14px 3px rgba(34, 60, 80, 0.31);
`;

export const NavMenu = styled.nav`
  display: flex;
  justify-content: baseline;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  padding-left: 20px;
`;
