import React from 'react';

import './navbar.scss';

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'><a href="/">Home</a></li>
                <li className='navbar__list-item'><a href="/about">About</a></li>
                <li className='navbar__list-item'><a href="/portfolio">Portfolio</a></li>
                <li className='navbar__list-item'><a href="/contact">Contact</a></li>
            </ul>
        </div>
    );

}
