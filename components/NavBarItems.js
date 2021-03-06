import React from 'react';
import Link from 'next/link';

const NavBarItems = () => {
  return (
    <div className='hidden md:flex justify-between px-4 my-4 py-1'>
      <Link href='/'>
        <a className='flex px-2 py-1 transform hover:scale-110'>Home</a>
      </Link>
      <Link href='/bio'>
        <a className='flex px-2 py-1 transform hover:scale-110'>Bio</a>
      </Link>
      <a
        href='https://fanlink.to/HEIRZ'
        className='flex px-2 py-1 transform hover:scale-110'
      >
        Music
      </a>
      <Link href='/contact'>
        <a className='flex px-2 py-1 transform hover:scale-110'>Contact</a>
      </Link>
    </div>
  );
};

export default NavBarItems;
