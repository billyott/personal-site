import React, { useRef }  from 'react';
import emailjs from 'emailjs-com';

import './contact-form.scss';

export default function ContactForm() {

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
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      <label className='contact-form__label'>Name</label>
      <input className='contact-form__input' type="text" name="name" />
      <label className='contact-form__label'>Email</label>
      <input className='contact-form__input' type="email" name="email" />
      <label className='contact-form__label'>Subject</label>
      <input className='contact-form__input' type="text" name="subject" />
      <label className='contact-form__label'>Message</label>
      <textarea className='contact-form__textarea' name="message" />
      <input className='contact-form__submit' type="submit" value="Send" />
    </form>
  );

};
