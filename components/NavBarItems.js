import Link from 'next/dist/client/link';

const NavBarItems = () => {
  const items = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Music',
      link: '/music',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
  ];
  console.log(items);
  return (
    <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
      <div className='text-sm lg:flex-grow'>
        {items.map((item, index) => (
          <div
            className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4'
            key={index}
          >
            <Link href={item.link}>{item.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBarItems;
