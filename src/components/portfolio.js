import React from 'react';
import ReactPlayer from "react-player";

import './portfolio.scss';
import projects from  '../data/project-data.json';

class Portfolio extends React.Component {

    state = {
        selectedProject: projects[0]
    }

    updateSelectedProject = (project) => {
        this.setState({selectedProject: project})
    }

    findIndexOfSelectedProject = () => {
        const index = projects.findIndex(project => project === this.state.selectedProject)
        return index
    }

    toggleNext = () => {
        if (this.findIndexOfSelectedProject() + 1 === projects.length) {
            this.setState({selectedProject: projects[0]})
        } else {
            this.setState({ selectedProject: projects[this.findIndexOfSelectedProject() + 1]})
        }
    }

    toggleBack = () => {
        if (this.findIndexOfSelectedProject() - 1 === -1) {
            this.setState({selectedProject: projects[projects.length-1]})
        } else {
            this.setState({ selectedProject: projects[this.findIndexOfSelectedProject() - 1]})
        }
    }

    render() {
        return (
            <div className="portfolio">
                <div className="portfolio__header">PORTFOLIO</div>
                <div className="portfolio__content">

                    <div className="portfolio__prev-container-content">
                        <div className="portfolio__toggle-container-wrapper">
                            <div className="portfolio__toggle-container portfolio__toggle-container--prev">
                                <button className="portfolio__toggle portfolio__toggle--prev" onClick={this.toggleBack}>&laquo; prev</button>
                            </div>
                            <div className="portfolio__toggle-container portfolio__toggle-container--next">
                            <button className="portfolio__toggle portfolio__toggle--next" onClick={this.toggleNext}>next &raquo;</button>
                            </div>
                        </div>
                        <div className="portfolio__prev-details">
                            <div className="portfolio__prev-title">{this.state.selectedProject['title']}</div>
                            <div className="portfolio__prev-desc">{this.state.selectedProject['desc']}</div>
                            <div className="portfolio__prev-stack"><b>Built With</b>: {this.state.selectedProject['stack']}</div>
                            <div className="portfolio__prev-github-container">
                                <a className="portfolio__prev-github" href={this.state.selectedProject['github']} target="_blank" rel="noreferrer">GitHub Repository</a>
                            </div>
                        </div>
                        <div className="portfolio__player-container">
                            <ReactPlayer className='portfolio__react-player' url={this.state.selectedProject['youtube']} width="100%" height="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Portfolio;