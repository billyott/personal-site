import React from 'react';
import { Link } from 'react-scroll';

import './navbar.scss';

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'>
                    <Link
                        activeClass="navbar__link--active"
                        className="navbar__link"
                        to="homepage"
                        smooth={true}
                        duration={500}
                        spy={true}
                        href=""
                    >
                        Home
                    </Link>
                </li>
                <li className='navbar__list-item'>
                    <Link
                        activeClass="navbar__link--active"
                        className="navbar__link"
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        href=""
                    >
                        Bio
                    </Link>
                </li>
                <li className='navbar__list-item'>
                    <Link
                        activeClass="navbar__link--active"
                        className="navbar__link"
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        href=""
                    >
                        Portfolio
                    </Link>
                </li>
                <li className='navbar__list-item'>
                    <Link
                        activeClass="navbar__link--active"
                        className="navbar__link"
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        href=""
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );

}
