import React from 'react';

import './about.scss';

function About() {

    return(
        <div className="about">
            <div className="about__header">ABOUT</div>
            <div className="about__content">
                <p>
                Hi! I'm a Full-stack Software Developer with a focus in React.js and Ruby on Rails. I'm also a former digital marketer who dabbled in data analysis, data visualization, team-management, and building things from scratch. In my spare time, I'm usually playing video games, cooking, or learning something new.
                </p>
                <img className="about__image" src="./assets/wo-pp-bw.png" alt="Bill Ott selfie" />
            </div>
        </div>
    )
}

export default About;