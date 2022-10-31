// import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import { FcFilmReel } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { Header, NavMenu, StyledLink } from './NavBar.styled';

export default function Navbar() {
  return (
    <Header>
      <NavMenu>
        <StyledLink to="/">
          <IconContext.Provider value={{ color: '#3f51b5', size: '40px' }}>
            <FcFilmReel />
          </IconContext.Provider>
        </StyledLink>
        <NavbarMenu />
      </NavMenu>
    </Header>
  );
}
