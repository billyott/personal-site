import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactPlayer from "react-player";

import './portfolio.scss';

class Portfolio extends React.Component {

    state = {
        selected: "none"
    }

    updateSeletedTwelveMonths = () => {
        this.setState({selected: "12months"})
    }

    updateSeletedFlashFlip = () => {
        this.setState({selected: "flash flip"})
    }

    updateSeletedCompletionist = () => {
        this.setState({selected: "completionist"})
    }

    updateSeletedScrambled = () => {
        this.setState({selected: "scrambled"})
    }

    generateDataForSelection = () => {
        if (this.state.selected === "12months") {
            return({
                title: "12MONTHS",
                prevImg: "./assets/twelvemonths-preview.png",
                stack: "React.js, Ruby on Rails, React Redux",
                desc: "A minimalist journaling app that allows users to jot down notes, track habits, and monitor mood and sleep trends.",
                github: "https://github.com/billyott/twelve-months-client",
                youtube: "https://www.youtube.com/watch?v=Pwc1hHV852g"
            })
        } else if (this.state.selected === "flash flip") {
            return({
                title: "Flash Flip",
                prevImg: "./assets/flashflip-preview.png",
                stack: "React.js, Ruby on Rails",
                desc: "A flash card application to help with studying any topic. Includes a 'game' feature to help with testing.",
                github: "https://github.com/billyott/flash-flip-client",
                youtube: "https://www.youtube.com/watch?v=KvWOtRugWLg"
            })
        } else if (this.state.selected === "completionist") {
            return({
                title: "Completionist",
                prevImg: "./assets/completionist-preview.png",
                stack: "JavaScript, Ruby on Rails",
                desc: "A basic task tracker.",
                github: "https://github.com/bfeldman/completionist-frontend",
                youtube: "https://www.youtube.com/watch?v=hXr_y20hb7g"
            })
        }  else if (this.state.selected === "scrambled") {
            return({
                title: "Scrambled",
                prevImg: "./assets/scrambled-preview.png",
                stack: "Ruby",
                desc: "A CLI word scramble game written completely in Ruby.",
                github: "https://github.com/billyott/scrambled",
                youtube: "https://www.youtube.com/watch?v=K8k6POBPFfU"
            })
        } else {
            return({})
        }
    }
    

    render() {
        return (
            <div className="portfolio" style={{backgroundImage: `url('./assets/about-background.png')`}}>
                <div className="portfolio__header-container">
                    <div className="portfolio__header">PORTFOLIO</div>
                    <NavLink to="/main-menu" className="portfolio__back-button">GO BACK</NavLink>
                </div>
                <div className="portfolio__projects-container">
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/twelvemonths-preview.png')`}}>
                        <button className="portfolio__project-title" onFocus={this.updateSeletedTwelveMonths}>12MONTHS</button>
                    </div>
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/flashflip-preview.png')`}}>
                        <button className="portfolio__project-title" onFocus={this.updateSeletedFlashFlip}>FLASH FLIP</button>
                    </div>
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/completionist-preview.png')`}}>
                        <button className="portfolio__project-title" onFocus={this.updateSeletedCompletionist}>COMPLETIONIST</button>
                    </div>
                    <div className="portfolio__project" style={{backgroundImage: `url('./assets/scrambled-preview.png')`}}>
                        <button className="portfolio__project-title" onFocus={this.updateSeletedScrambled}>SCRAMBLED</button>
                    </div>
                </div>
                {this.state.selected === "none" ? null :
                    <div className="portfolio__prev-container">
                        <div className="portfolio__prev-details">
                            <div className="portfolio__prev-title">{this.generateDataForSelection()['title']}</div>
                            <div className="portfolio__prev-desc">⚬ {this.generateDataForSelection()['desc']}</div>
                            <div className="portfolio__prev-stack">⚬ built in {this.generateDataForSelection()['stack']}</div>
                            <div className="portfolio__prev-github-container">
                                <a className="portfolio__prev-github" href={this.generateDataForSelection()['github']} target="_blank" rel="noreferrer">GitHub Repo</a>
                            </div>
                        </div>
                        <div className="portfolio__player-container">
                            <ReactPlayer className='portfolio__react-player' url={this.generateDataForSelection()['youtube']} width="100%" height="100%"/>
                        </div>
                        {/* <img src={this.generateDataForSelection()['prevImg']} className="portfolio__prev-prev-img" alt="screenshot of project ui"></img> */}
                        {/* <div className="portfolio__prev-demo">
                            <div className="portfolio__prev-demo-title"></div>
                            <div className="portfolio__prev-demo-vid"></div>
                        </div> */}
                    </div>
                }
            </div>
        );
    }
    
}

export default Portfolio;