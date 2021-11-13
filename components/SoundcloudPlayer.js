import ReactPlayer from 'react-player';

const SoundcloudPlayer = () => {
  return (
    <div className='flex justify-center p-2 filter grayscale pt-6 '>
      <ReactPlayer
        className='border-double border-2 border-light-blue-500'
        url='https://soundcloud.com/heirz/sets/heirz-digital-alchemy'
        width='85%'
      />
    </div>
  );
};

export default SoundcloudPlayer;
