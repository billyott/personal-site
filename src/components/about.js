import React from 'react';
import { NavLink } from 'react-router-dom';

import './about.scss';

function About() {

    return(
        <div className="about" style={{backgroundImage: `url('./assets/about-background.png')`}}>
            <div className="about__header">ABOUT</div>
            <div className="about__content-outer">
                <div className="about__content-inner">
                    <img className="about__image" src="./assets/self-portrait.png" alt="cartoon version of Billy Ott" />
                    <div className="about__text-container">
                        <div className="about__subheader">Billy Ott</div>
                        <div className="about__bio">
                            <ul>
                                <li>LOCATION: New York City, NY, USA</li>
                                <li>BIRTHDAY: 05.18.19XX</li>
                                <li>BLOOD TYPE: A+</li>
                                <li>MB: ISFJ</li>
                            </ul>
                            <p>
                            bio: Hi! I'm a Full-stack Software Developer with a focus in React.js and Ruby on Rails. I'm also a former digital marketer who dabbled in data analysis, data visualization, team-management, and building things from scratch. In my spare time, I'm usually playing video games, cooking, or learning something new.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to="/main-menu" className="about__back-button">GO BACK</NavLink>
        </div>
    )
}

export default About;