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
                        <a className="contact__item" href="https://github.com/billyott" target="_blank" rel="noreferrer">GitHub</a>
                        <a className="contact__item" href="https://www.linkedin.com/in/billyott" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a className="contact__item" href="https://my.playstation.com/profile/zomgbill" target="_blank" rel="noreferrer">PSN</a>
                    </div>
                </div>
            </div>
            <NavLink to="/main-menu" className="contact__back-button">GO BACK</NavLink>
        </div>
    )
}

export default Contact;