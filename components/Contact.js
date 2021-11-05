const Contact = () => {
  return (
    <div className='flex justify-center'>
      <figure>
        <div className=' px-10'>
          <img
            className='w-6/12 mx-auto filter grayscale border-double border-4 border-light-blue-500'
            src='/heirz-q.jpg'
            alt=''
          />
          <h1 className='flex justify-center px-4 text-white pt-4'>Booking:</h1>
          <p className='flex justify-center  text-white'>
            James@subspacemgmt.com
          </p>
          <h1 className='flex justify-center px-16  pt-4 text-white'>
            All Other Inquiries:
          </h1>
          <p className='flex justify-center  text-white'>
            HEIRZofficial@gmail.com
          </p>
        </div>
      </figure>
    </div>
  );
};

export default Contact;
