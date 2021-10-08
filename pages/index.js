import Head from 'next/head';
import BandsInTown from '../components/BandsInTown';
import PressShot from '../components/PressShot';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>HEIRZ</title>
        <link rel='icon' href='/heirzlogo.png' />
      </Head>

      <main>
        <div>
          <img src='/heirzwhite.png' alt='HEIRZ' className='logo' />
          <PressShot className='pressphoto' />
          <BandsInTown className='eventdates' />
        </div>
      </main>

      {/* <footer>Powered by Alex Sutherland Design</footer> */}
    </div>
  );
}
