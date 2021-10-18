import Link from 'next/dist/client/link';

const NavBarItems = () => {
  const items = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'Bio',
      link: '/bio',
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
    <div className='w-full inline-block leading-none lg:flex  lg:w-auto'>
      <div className='text-sm lg:flex-grow'>
        {items.map((item, index) => (
          <div
            className='block mt-4 lg:inline-block lg:mt-0 text-white mr-4 transform hover:scale-110 motion-reduce:transform-none'
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
