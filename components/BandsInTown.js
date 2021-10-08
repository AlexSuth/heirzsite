const BandsInTown = () => {
  return (
    <div className='eventdates'>
      <script
        charset='utf-8'
        src='https://widget.bandsintown.com/main.min.js'
      ></script>
      <a
        class='bit-widget-initializer'
        data-artist-name='HEIRZ'
        data-display-past-dates='false'
        data-text-color='#ffffff'
        data-link-color='#ffffff'
        data-background-color='#000000'
        data-display-details='false'
        data-popup-background-color='#bd10e0'
        data-link-text-color='#000000'
        data-separator-color='#ffffff'
        data-language='en'
        data-font='Helvetica'
        data-display-local-dates='false'
        data-auto-style='false'
        data-display-lineup='false'
        data-display-play-my-city='true'
        data-display-limit='15'
        data-display-start-time='false'
      ></a>
    </div>
  );
};

export default BandsInTown;
