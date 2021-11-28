import React, { useRef }  from 'react';
import emailjs from 'emailjs-com';

import './contact.scss';

function ContactForm() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('service_azyqwow', 'template_qn44fp9', e.target, 'user_w6bhc7Iz1HzSaAEscjbH1')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset();
    
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;