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
      {socials.map((social, index) => (
        <div key={social.service}>
          <Link href={social.link}>
            <img src={social.icon} alt={social.service} className='icon' />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialToolBar;
