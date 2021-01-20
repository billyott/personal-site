import React from 'react';
import { NavLink } from 'react-router-dom';

import './about.scss';

function About() {

    return(
        <div className="about">
            <div className="about__header">ABOUT</div>
            <div className="about__content-outer">
                <div className="about__content-inner">
                    <img className="about__image" src="./assets/self-portrait.png" alt="cartoon version of Billy Ott" />
                    <div className="about__text-container">
                        <div className="about__subheader">Billy Ott</div>
                        <p className="about__bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
            <NavLink to="/main-menu" className="about__back-button">GO BACK</NavLink>
        </div>
    )
}

export default About;