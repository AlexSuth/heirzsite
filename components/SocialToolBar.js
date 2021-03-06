import Link from 'next/link';

const SocialToolBar = ({ socials }) => {
  return (
    <div>
      <div className=' flex justify-center  text-white'>
        {socials.map((social, index) => (
          <Link key={index} href={social.link}>
            <img
              src={social.icon}
              alt={social.service}
              className='transform hover:scale-110 motion-reduce:transform-none text-sm px-4 leading-none w-16 md:w-1/12 cursor-pointer  mt-4 lg:mt-0'
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialToolBar;
