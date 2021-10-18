const Contact = () => {
  return (
    <div className='flex justify-center'>
      <figure>
        <div className=' px-10 space-y-4'>
          <img
            className='w-6/12 mx-auto filter grayscale border-double border-4 border-light-blue-500'
            src='/heirz-q.jpg'
            alt=''
          />
          <h1 className='flex justify-center px-16 text-white'>
            Booking: James@subspacemgmt.com
          </h1>
          <h1 className='flex justify-center px-16 text-white'>
            All Other Inquiries: HEIRZofficial@gmail.com
          </h1>
        </div>
      </figure>
    </div>
  );
};

export default Contact;
