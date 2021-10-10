import Head from 'next/head';
import BandsInTown from '../components/BandsInTown';

import PressShot from '../components/PressShot';
import SoundcloudPlayer from '../components/SoundcloudPlayer';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>HEIRZ</title>
        <link rel='icon' href='/symbol.svg' />
      </Head>
      <header>
        <img src='/heirzwhite.png' alt='HEIRZ' className='logo' />
      </header>
      <main className='body'>
        <div>
          <PressShot className='pressphoto' />
          <SoundcloudPlayer className='soundcloudplayer' />
          <BandsInTown className='eventdates' />
        </div>
      </main>

      {/* <footer>Powered by Alex Sutherland Design</footer> */}
    </div>
  );
}
