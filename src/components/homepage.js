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
                <p>
                    I build websites using frameworks like Vue and React for work, but I have full stack training and experience with python, ruby, and sql too. I've been writing code since 2018 and made it my full time career in 2020.
                </p>
                <p>
                    I live in NYC and my hobbies include cooking, traveling, gaming, and learning Japanese.
                </p>
            </div>
        </div>
    );

}
