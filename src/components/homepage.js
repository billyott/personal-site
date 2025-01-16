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
                    I build web apps and primarily develop with Vue and React. I have Full Stack training and experience with python, ruby, and sql too.
                </p>
                <p>
                    I live in Ann Arbor, Michigan. When I'm not building websites, I'm usually learning something new or cooking up a storm.
                </p>
            </div>
        </div>
    );

}
