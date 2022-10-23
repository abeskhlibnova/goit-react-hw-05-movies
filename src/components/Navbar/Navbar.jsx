import { Link } from 'react-router-dom';
// import styles from './navbar.module.scss';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import { FcFilmReel } from 'react-icons/fc';
import { IconContext } from 'react-icons';
import { Header, NavMenu } from './NavBar.styled';

export default function Navbar() {
  return (
    <Header>
      <NavMenu>
        <Link to="/">
          <IconContext.Provider value={{ color: '#3f51b5', size: '40px' }}>
            <FcFilmReel />
          </IconContext.Provider>
        </Link>
        <NavbarMenu />
      </NavMenu>
    </Header>
  );
}
