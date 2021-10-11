import Link from 'next/link';

import SocialToolBar from './SocialToolBar';

const NavBar = () => {
  return (
    <nav>
      <Link href='/'>
        <p>HOME</p>
      </Link>
      <Link href='/about'>
        <p>ABOUT</p>
      </Link>
      <Link href='/music'>
        <p>MUSIC</p>
      </Link>
      <Link href='/contact'>
        <p>CONTACT</p>
      </Link>

      <SocialToolBar />
    </nav>
  );
};

export default NavBar;
