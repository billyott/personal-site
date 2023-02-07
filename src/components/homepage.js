import React from 'react';

import './homepage.scss';

export default function Homepage() {

    return (
        <div className="homepage">
            <div className="homepage__header">
                Hello, I'm Bill Ott.
            </div>
            <div className="homepage__sub-header">
                I'm a Front End Developer.
            </div>
            <div className="homepage__tagline">
                I mostly build websites with frameworks like Vue and React, but I have full-stack training and experience with python, ruby, and sql. I've been writing code since 2018 and even made it a full time thing in 2020.
            </div>
        </div>
    );

}
