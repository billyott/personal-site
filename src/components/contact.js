import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import './contact.scss';

export default function Contact() {

    return(
        <div className="contact">
            <div className="contact__header">
                CONTACT
            </div>
            <div className="contact__contact-icons">
                <a
                    className="contact__icon"
                    href="mailto:williamrichardott@icloud.com"
                    rel="noreferrer">
                    <FaEnvelope 
                        className="contact__icon-email" 
                        size={60}
                        color="rgb(109,122,102)" />
                </a>
                <a
                    className="contact__icon"
                    href="https://github.com/billyott/"
                    target="_blank"
                    rel="noreferrer">
                    <FaGithub
                        className="contact__icon-li"
                        size={60}
                        color="rgb(109,122,102)" />
                </a>
                <a
                    className="contact__icon"
                    href="https://www.linkedin.com/in/billyott/"
                    target="_blank"
                    rel="noreferrer">
                    <FaLinkedin
                        className="contact__icon-li"
                        size={60}
                        color="rgb(109,122,102)" />
                </a>
            </div>
        </div>
    )
}
