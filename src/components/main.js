import React from 'react';

import Homepage from './homepage';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

import './main.scss';

export default function Main() {

    return (
        <div className="main">
            <Homepage />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );

}
