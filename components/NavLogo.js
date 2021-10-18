import Link from 'next/dist/client/link';

const NavLogo = () => {
  return (
    <div className='flex items-center flex-shrink-0 w-20 md:w-40 mr-6 cursor-pointer'>
      <Link href='/'>
        <img className='object-contains' src='/heirzwhite.png' />
      </Link>
    </div>
  );
};

export default NavLogo;
