import React from 'react';
import Link from 'next/dist/client/link';

const DropDownMenu = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'hidden'
          : 'text-white object-left md:hidden justify-between px-4 my-4 py-1'
      }
      onClick={toggle}
    >
      <Link href='/'>
        <h1 className='px-2 py-1 cursor-pointer transform hover:scale-95'>
          Home
        </h1>
      </Link>
      <Link href='/bio'>
        <h1 className='px-2 py-1 cursor-pointer transform hover:scale-95'>
          Bio
        </h1>
      </Link>
      <a
        href='https://fanlink.to/HEIRZ'
        className='flex px-2 py-1 transform hover:scale-95'
        target='_blank'
      >
        Music
      </a>
      <Link href='/contact'>
        <h1 className='px-2 py-1 cursor-pointer transform hover:scale-95'>
          Contact
        </h1>
      </Link>
    </div>
  );
};

export default DropDownMenu;
