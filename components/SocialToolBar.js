import Link from 'next/link';

const SocialToolBar = () => {
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
      link: 'soundcloud.com/HEIRZ',
    },
    {
      service: 'twitter',
      icon: 'social_svg/Twitter.svg',
      link: 'https://twitter.com/HEIRZBass',
    },
  ];

  console.log(socials);
  return (
    <div>
      <div className=' flex justify-center p-2 pt-8 text-white'>
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
      <h1 className='p-2 pb-8 text-xs flex justify-center px-16 text-white'>
        Alex Sutherland Design
      </h1>
    </div>
  );
};

export default SocialToolBar;
