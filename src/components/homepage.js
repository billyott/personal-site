import React from 'react';
import { NavLink } from 'react-router-dom';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            // <div className="homepage" style={{backgroundImage: `url('./assets/homepage-background.png')`}}>
            <div className="homepage">
                <div className="homepage__top-area"></div>
                <div className="homepage__center-area">
                    <div className="homepage__headers-container">
                        <div className="homepage__header-container">
                            <div className="homepage__header">FULL-STACK</div>
                            <div className="homepage__header">WEB DEVELOPER</div>
                        </div>
                        <div className="homepage__sub-header">BILL OTT</div>
                    </div>
                    <div className="homepage__start-container">
                        <div className="homepage__start-icon"></div>
                        <NavLink to="/main-menu" className="homepage__start-text">PRESS START</NavLink>
                    </div>
                </div>
                <div className="homepage__bottom-area">
                    <div className="homepage__footer">
                        <div className="homepage__footer-link-container">
                            <NavLink to="/main-menu" className="homepage__footer-link">main menu</NavLink>/ 
                            <NavLink to="/portfolio" className="homepage__footer-link">portfolio</NavLink>/ 
                            <NavLink to="/about" className="homepage__footer-link">about</NavLink>/ 
                            <NavLink to="/contact" className="homepage__footer-link">contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Homepage;