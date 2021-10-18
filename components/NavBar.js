import Link from 'next/link';

import NavBarItems from './NavBarItems';
import NavDrawerButton from './NavDrawerButton';
import NavLogo from './NavLogo';
import SocialToolBar from './SocialToolBar';

const NavBar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between flex-wrap p-6'>
        <NavLogo />
        <NavDrawerButton />
        <NavBarItems />
        <SocialToolBar />
      </nav>
    </div>
  );
};

export default NavBar;
