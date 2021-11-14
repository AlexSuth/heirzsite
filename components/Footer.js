import SocialToolBar from './SocialToolBar';
import FooterLogo from './FooterLogo';

const Footer = ({ socials }) => {
  return (
    <footer className='flex justify-center grid grid-cols-1 p-4'>
      <div>
        <FooterLogo />
        <SocialToolBar socials={socials} />
        <h1 className='pt-6 text-xs flex justify-center text-white'>
          Alex Sutherland Design
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
