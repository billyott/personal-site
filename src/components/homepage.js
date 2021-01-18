import React from 'react';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage" style={{backgroundImage: `url('./assets/homepage-background.jpg')`}}>
                <div className="homepage__top-area"></div>
                <div className="homepage__center-area">
                    <div className="homepage__header-container">
                        <div className="homepage__header"><span className="homepage__special-char">B</span>ILLY OTT</div>
                        <div className="homepage__header"><span className="homepage__special-char">F</span>ULL STACK DEVELOPE<span className="homepage__special-char">R</span></div>
                    </div>
                    <div className="homepage__sub-header">STAGE TWO</div>
                    <div className="homepage__start-container">
                        <div className="homepage__start-icon"></div>
                        <div className="homepage__start-text">PRESS START</div>
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