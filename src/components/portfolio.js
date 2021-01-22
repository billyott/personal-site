import React from 'react';
import { NavLink } from 'react-router-dom';

import './portfolio.scss';

class Portfolio extends React.Component {

    state = {
        selected: "none"
    }

    render() {
        return (
            <div className="portfolio" style={{backgroundImage: `url('./assets/about-background.png')`}}>
                <div className="portfolio__header-container">
                    <div className="portfolio__header">PORTFOLIO</div>
                    <NavLink to="/main-menu" className="portfolio__back-button">GO BACK</NavLink>
                </div>
                <div className="portfolio__projects-container">
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/scrambled-prev.png')`}}>
                        <button className="portfolio__project-title">SCRAMBLED</button>
                    </div>
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/contact-preview.png')`}}>
                        <button className="portfolio__project-title">COMPLETIONIST</button>
                    </div>
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/contact-preview.png')`}}>
                        <button className="portfolio__project-title">FLASH FLIP</button>
                    </div>
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/contact-preview.png')`}}>
                        <button className="portfolio__project-title">12MONTHS</button>
                    </div>
                </div>
                <div className="portfolio__prev-container">
                    <div className="portfolio__prev-details">
                        <div className="portfolio__prev-prev-img"></div>
                        <div className="portfolio__prev-title"></div>
                        <div className="portfolio__prev-stack"></div>
                        <div className="portfolio__prev-desc"></div>
                        <div className="portfolio__prev-github"></div>
                    </div>
                    <div className="portfolio__prev-demo">
                        <div className="portfolio__prev-demo-title"></div>
                        <div className="portfolio__prev-demo-vid"></div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Portfolio;