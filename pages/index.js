import Head from 'next/head';
import SoundCloudPlayer from 'react-player/soundcloud';
import BandsInTown from '../components/BandsInTown';

import PressShot from '../components/PressShot';
import SoundcloudPlayer from '../components/SoundcloudPlayer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HEIRZ</title>
        <link rel='icon' href='/symbol.svg' />
      </Head>
      <PressShot />
      <SoundcloudPlayer />
      <BandsInTown />
    </div>
  );
}
