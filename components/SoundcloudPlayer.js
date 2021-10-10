import ReactPlayer from 'react-player';

const SoundcloudPlayer = () => {
  return (
    <div>
      <ReactPlayer
        className='soundcloudplayer'
        height='30%'
        width='80%'
        url='https://soundcloud.com/heirz/sets/heirz-digital-alchemy'
      />
    </div>
  );
};

export default SoundcloudPlayer;
