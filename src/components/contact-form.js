import React, { useRef, useState }  from 'react';
import emailjs from 'emailjs-com';

import './contact-form.scss';

export default function ContactForm() {

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hadError, setHadError] = useState(false);

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SABISU, process.env.REACT_APP_TENPURETO, e.target, process.env.REACT_APP_YUZA)
    .then((result) => {
      console.log(result.text);
      setHasSubmitted(true);
    }, (error) => {
      console.log(error.text);
      setHadError(true);
    });

    e.target.reset();
  };

  return (
    <form className='contact-form' ref={form} onSubmit={sendEmail}>
      {hasSubmitted && (
        <div className='contact-form__submit-message'>
          Thank you for your message! I'll reply as soon as possible!
        </div>
      )}
      {hadError && (
        <div className='contact-form__submit-message'>
          Oh no! Issue sending message - please refresh and try again :(
        </div>
      )}
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
