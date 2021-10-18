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
    <div className=' lg:flex justify-end w-14 md:w-1/12'>
      {socials.map((social, index) => (
        <Link key={index} href={social.link}>
          <img
            src={social.icon}
            alt={social.service}
            className='text-sm px-4 py-2 leading-none  cursor-pointer  mt-4 lg:mt-0'
          />
        </Link>
      ))}
    </div>

    // <div>
    //   {socials.map((social, index) => (
    //     <div key={index}>
    //       <Link href={social.link}>
    //         <img src={social.icon} alt={social.service} className='icon' />
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
};

export default SocialToolBar;
