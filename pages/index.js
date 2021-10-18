import Head from 'next/head';
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

      <header>{/* <img src='/heirzwhite.png' alt='HEIRZ' /> */}</header>
      <main>
        <div>Home Page</div>
      </main>
    </div>
  );
}
