import items from './items';
import { StyledNavLink, NavbarMenuUl, NavbarItems } from './NavbarMenu.styled';

export default function NavbarMenu() {
  const elements = items.map(({ id, to, text, icon: Icon }) => {
    return (
      <NavbarItems key={id}>
        <StyledNavLink to={to} end>
          <Icon size="20" />
          {text}
        </StyledNavLink>
      </NavbarItems>
    );
  });
  return <NavbarMenuUl>{elements}</NavbarMenuUl>;
}
