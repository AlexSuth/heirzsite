import React, { useState, useEffect } from 'react';

import Link from 'next/link';

import NavBarItems from './NavBarItems';
import NavDrawerButton from './NavDrawerButton';
import NavLogo from './NavLogo';
import SocialToolBar from './SocialToolBar';

const NavBar = ({ toggle }) => {
  return (
    <div>
      <nav className='flex items-center justify-between flex-wrap p-6 text-white'>
        <NavLogo />
        <NavDrawerButton toggle={toggle} />
        <NavBarItems />
      </nav>
    </div>
  );
};

export default NavBar;
