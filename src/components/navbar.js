import React from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'><Link to="homepage" smooth={true} duration={500}><a href="/">Home</a></Link></li>
                <li className='navbar__list-item'><Link to="about" smooth={true} duration={500}><a href="/">Bio</a></Link></li>
                <li className='navbar__list-item'><Link to="portfolio" smooth={true} duration={500}><a href="/">Portfolio</a></Link></li>
                <li className='navbar__list-item'><Link to="contact" smooth={true} duration={500}><a href="/">Contact</a></Link></li>
            </ul>
        </div>
    );

}
