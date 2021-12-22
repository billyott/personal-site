import React from 'react';
import ContactForm from './contact-form';

import './contact.scss';

class Contact extends React.Component {

    render() {
        return(
            <div className="contact" >
                <div className="contact__header">CONTACT</div>
                <ContactForm />
            </div>
        )
    }
}

export default Contact;
