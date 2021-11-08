import Footer from './Footer';
import NavBar from './NavBar';
import DropDownMenu from './DropDownMenu';

import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    console.log('You clicked');
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative h-auto bg-black'>
      <NavBar toggle={toggle} />
      <DropDownMenu isOpen={isOpen} toggle={toggle} />
      <div className='container mx-auto'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
