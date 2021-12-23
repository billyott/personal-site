import React from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'><Link to="homepage">Home</Link></li>
                <li className='navbar__list-item'><Link to="about">About</Link></li>
                <li className='navbar__list-item'><Link to="portfolio">Portfolio</Link></li>
                <li className='navbar__list-item'><Link to="contact">Contact</Link></li>
            </ul>
        </div>
    );

}
