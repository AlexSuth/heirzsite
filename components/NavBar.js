import NavBarItems from './NavBarItems';
import NavDrawerButton from './NavDrawerButton';
import NavLogo from './NavLogo';

const NavBar = ({ toggle }) => {
  return (
    <nav className='flex items-center justify-between flex-wrap p-6 text-white'>
      <NavLogo />
      <NavDrawerButton toggle={toggle} />
      <NavBarItems />
    </nav>
  );
};

export default NavBar;
