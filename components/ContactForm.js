import React from 'react';

const ContactForm = ({ toggleFormMessage }) => {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    toggleFormMessage();
  }

  return (
    <div className='p-10 flex justify-center'>
      <form
        className='mx-auto filter grayscale border-double border-4 border-light-blue-500 p-8'
        method='post'
        onSubmit={handleOnSubmit}
      >
        <h1 className='text-white flex justify-center'>Contact HEIRZ</h1>
        <p className='p-2'>
          <label className='block text-white' htmlFor='name'>
            Name
          </label>
          <input
            className='filter grayscale border-double border-4 border-black'
            type='text'
            name='name'
          />
        </p>

        <p className='p-2'>
          <label className='block text-white' htmlFor='email'>
            Email
          </label>
          <input
            className='block filter grayscale border-double border-4 border-black'
            type='email'
            name='email'
          />
        </p>
        <p className='p-2'>
          <label className='block text-white' htmlFor='message'>
            Message
          </label>
          <textarea
            className=' block filter grayscale border-double border-4 border-black'
            name='message'
          />
        </p>
        <p>
          <div className='flex justify-center'>
            <button
              className='block bg-white text-black p-2 rounded border-double border-4 border-black hover:bg-black hover:text-white hover:border-white'
              type='submit'
            >
              SUBMIT
            </button>
          </div>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
