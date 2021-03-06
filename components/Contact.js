import ContactForm from './ContactForm';
import LiveShot from './LiveShot';
import { useState } from 'react';

const Contact = () => {
  const [formMessage, setFormMessage] = useState(false);
  const toggleFormMessage = () => {
    setFormMessage(!formMessage);
  };

  return (
    <div>
      {!formMessage ? (
        <></>
      ) : (
        <h1 className='flex justify-center text-red-600'>
          Form Currently Under Construction. Please email us at
          HEIRZOfficial@gmail.com
        </h1>
      )}
      <ContactForm toggleFormMessage={toggleFormMessage} />
      <LiveShot />
    </div>
  );
};

export default Contact;
