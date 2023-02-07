import React from 'react';
import { Link } from 'react-scroll';

import './navbar-jp.scss';

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'>
                    <Link
                        className="navbar__link"
                        to="homepage"
                        smooth={true}
                        duration={500}
                        spy={true}
                        tabIndex='0'
                        href=""
                    >
                        ホーム
                    </Link>
                </li>
                <li className='navbar__list-item'>
                    <Link
                        className="navbar__link"
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        tabIndex='0'
                        href=""
                    >
                        ポートフォリオ
                    </Link>
                </li>
                <li className='navbar__list-item'>
                    <Link
                        className="navbar__link"
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        tabIndex='0'
                        href=""
                    >
                        連絡
                    </Link>
                </li>
            </ul>
        </div>
    );

}
