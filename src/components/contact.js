import React from 'react';
import { NavLink } from 'react-router-dom';

import './contact.scss';

function Contact() {

    return(
        <div className="contact" style={{backgroundImage: `url('./assets/about-background.png')`}}>
            <div className="contact__header">CONTACT</div>
            <div className="contact__content-outer">
                <div className="contact__content-inner">
                    <div className="contact__items">
                        <a className="contact__item" href="mailto:willrichott@gmail.com" target="_blank">Email</a>
                        <a className="contact__item" href="https://www.linkedin.com/in/billyott" target="_blank">LinkedIn</a>
                    </div>
                </div>
            </div>
            <NavLink to="/main-menu" className="contact__back-button">GO BACK</NavLink>
        </div>
    )
}

export default Contact;