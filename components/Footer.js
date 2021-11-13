import SocialToolBar from './SocialToolBar';

const Footer = ({ socials }) => {
  return (
    <footer className='flex justify-center grid grid-cols-1 divide-y divide-yellow-500'>
      <div>
        <SocialToolBar socials={socials} />
      </div>
    </footer>
  );
};

export default Footer;
