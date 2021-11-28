import React from 'react';

import './about.scss';

export default function About() {

    return(
        <div className="about">
            <div className="about__header">ABOUT</div>
            <div className="about__content">
                <img className="about__image" src="./assets/wo-pp-bw.png" alt="Bill Ott selfie" />
                <p>
                Hello. Thank you for visiting my site. 
                <br/>
                <br/>
                I'm a full stack developer. These days, I'm mostly writing Javascript and working in frameworks like Vue and React, but I also use Python and Ruby.
                <br/>
                <br/>
                In the past, I worked in digital marketing - managing campaigns, analyzing performance data, and building tools to make it easier. I worked with a lot of cool tech, but I wanted to make cool tech.
                <br/>
                <br/>
                I'm usually coding, learning Japanese, cooking, or playing video games.
                <br/>
                <br/>
                NYC is home.
                </p>
            </div>
        </div>
    );

};
