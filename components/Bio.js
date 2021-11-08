const Bio = () => {
  return (
    <div className='justify-center'>
      <figure>
        <div className='px-10 space-y-4'>
          <img
            className='w-10/12 mx-auto filter grayscale border-double border-4 border-light-blue-500'
            src='/heirzabout.jpg'
            alt=''
          />
          <p className='px-16 text-white'>
            HEIRZ is an experimental bass music duo boasting a powerful sound
            that represents the culmination of 4 years of collaboration between
            PNW based producers Buckets and Saman. Wielding over 25 years of
            combined musical experience, these two mysterious producers have
            created a definitively visceral and psychedelic vision of west coast
            bass music that begun to make serious waves within the community.
            Their independently released EP, “Digital Alchemy” saw tracks
            premiered by The Untz, Headbanger Society, and Electric Hawk. This,
            alongside their recent success with a slew of singles on Sleeveless
            Records, Spicy Bois, Ghetto Ghetto, SUS Collective and more
            indicates an increasingly bright and promising future for the
            freshly minted project.
          </p>
          <p className='px-16 text-white'>
            HEIRZ may draw inspiration from modern day artists like as Shades, G
            JONES, Tsuruda and Bleep Bloop, but at their core, HEIRZ unique
            style is fueled by punk rock, metal, video game soundtracks, hip
            hop, and experimental electronica. Prepare to enter a dark, and
            ethereal dimension of gritty, supernatural sounds when HEIRZ hits
            the stage.
          </p>
        </div>
      </figure>
    </div>
  );
};

export default Bio;
