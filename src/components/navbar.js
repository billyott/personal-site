import React from 'react';
import  { NavLink } from "react-router-dom";

import './navbar.scss';

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__list-item'><NavLink exact to="/">Home</NavLink></li>
                <li className='navbar__list-item'><NavLink to="/about">About</NavLink></li>
                <li className='navbar__list-item'><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li className='navbar__list-item'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    );

}
