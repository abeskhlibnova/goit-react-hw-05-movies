import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarMenuUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
`;

export const NavbarItems = styled.li`
  padding-right: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  color: #3f51b5;
  font-size: 30px;

  &:hover {
    color: orange;
  }

  &.active {
    color: red;
  }
`;
