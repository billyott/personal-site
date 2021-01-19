import React from 'react';
import { NavLink } from 'react-router-dom';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage" style={{backgroundImage: `url('./assets/homepage-background.png')`}}>
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
                        <div>main menu / about / portfolio / blog / contact </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Homepage;