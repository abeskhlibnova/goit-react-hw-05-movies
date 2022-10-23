import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
import items from './items';
import { NavbarMenuWrapper, NavbarItems } from './NavbarMenu.styled';

export default function NavbarMenu() {
  const elements = items.map(({ id, to, text, icon: Icon }) => {
    return (
      <NavbarItems key={id}>
        <NavLink to={to}>
          <Icon size="20" />
          {text}
        </NavLink>
      </NavbarItems>
    );
  });
  return <NavbarMenuWrapper>{elements}</NavbarMenuWrapper>;
}
