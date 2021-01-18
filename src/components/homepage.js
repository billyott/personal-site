import React from 'react';

import './homepage.scss';

class Homepage extends React.Component {


    render() {
        return (
            <div className="homepage" style={{backgroundImage: `url('./assets/homepage-background.jpg')`}}>
                <div className="homepage__top-area"></div>
                <div className="homepage__header-container">
                    <div className="homepage__header">BILLY OTT</div>
                    <div className="homepage__header">FULL STACK DEVELOPER</div>
                    <div className="homepage__sub-header">STAGE TWO</div>
                </div>
                <div className="homepage__start-container">
                    <div className="homepage__start-icon"></div>
                    <div className="homepage__start-text">PRESS START</div>
                </div>
                <div className="homepage__footer">
                    <div>main menu / about / portfolio / blog / contact </div>
                </div>
            </div>
        );
    }

}

export default Homepage;