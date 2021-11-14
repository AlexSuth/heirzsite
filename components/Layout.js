import Footer from './Footer';
import NavBar from './NavBar';
import DropDownMenu from './DropDownMenu';

import { useState } from 'react';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const clickOut = () => {
    setIsOpen(true);
  };

  const socials = [
    {
      service: 'instagram',
      icon: 'social_svg/Instagram.svg',
      link: 'https://www.instagram.com/heirzmusic/',
    },
    {
      service: 'facebook',
      icon: 'social_svg/Facebook.svg',
      link: 'https://www.facebook.com/HEIRZmusic',
    },
    {
      service: 'soundcloud',
      icon: 'social_svg/Soundcloud.svg',
      link: 'https://soundcloud.com/HEIRZ',
    },
    {
      service: 'twitter',
      icon: 'social_svg/Twitter.svg',
      link: 'https://twitter.com/HEIRZBass',
    },
  ];

  return (
    <div className='container bg-black'>
      <div className='mx-auto h-full'>
        <NavBar toggle={toggle} />
        <DropDownMenu isOpen={isOpen} toggle={toggle} />
        <div onClick={clickOut}>{children}</div>
        <Footer socials={socials} />
      </div>
    </div>
  );
};

export default Layout;
