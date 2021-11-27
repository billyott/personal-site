import React from 'react';
import { NavLink } from 'react-router-dom';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage">
                <div class="homepage__title">
                    <div className="homepage__header">FULL STACK DEVELOPER</div>
                    <div className="homepage__sub-header">BILL OTT</div>
                </div>
                <div className="homepage__footer">
                    <div className="homepage__footer-link-container">
                        <NavLink to="/main-menu" className="homepage__footer-link">main menu</NavLink>/ 
                        <NavLink to="/portfolio" className="homepage__footer-link">portfolio</NavLink>/ 
                        <NavLink to="/about" className="homepage__footer-link">about</NavLink>/ 
                        <NavLink to="/contact" className="homepage__footer-link">contact</NavLink>
                    </div>
                </div>
                <div className="homepage__background-area" >
                    <ul className="homepage__background-circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Homepage;