import React from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'><Link to="homepage" smooth={true} duration={500}>Home</Link></li>
                <li className='navbar__list-item'><Link to="about" smooth={true} duration={500}>Bio</Link></li>
                <li className='navbar__list-item'><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
                <li className='navbar__list-item'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>
    );

}
