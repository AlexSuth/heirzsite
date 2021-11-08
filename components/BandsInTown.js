const BandsInTown = () => {
  return (
    <div className='justify-center px-8 p-2 filter grayscale pt-6 '>
      <script
        charset='utf-8'
        src='https://widget.bandsintown.com/main.min.js'
      ></script>
      <a
        class='bit-widget-initializer'
        data-artist-name='HEIRZ'
        data-font='Helvetica'
        data-language='en'
        data-display-details='false'
        data-text-color='#ffffff'
        data-background-color='#000000'
        data-separator-color='#DDDDDD'
        data-popup-background-color='#ffffff'
        data-link-color='#eeecec'
        data-link-text-color='#000000'
      ></a>
    </div>
  );
};

export default BandsInTown;
