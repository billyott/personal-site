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
                        <div className="portfolio__prev-details">
                            <div className="portfolio__prev-title">{this.state.selectedProject['title']}</div>
                            <div className="portfolio__prev-desc">⚬ {this.state.selectedProject['desc']}</div>
                            <div className="portfolio__prev-stack">⚬ built in {this.state.selectedProject['stack']}</div>
                            <div className="portfolio__prev-github-container">
                                <a className="portfolio__prev-github" href={this.state.selectedProject['github']} target="_blank" rel="noreferrer">GitHub Repo</a>
                            </div>
                        </div>
                        <div className="portfolio__player-container">
                            <ReactPlayer className='portfolio__react-player' url={this.state.selectedProject['youtube']} width="100%" height="100%"/>
                        </div>
                    </div>
                    <div className="portfolio__mobile-toggle-container portfolio__mobile-toggle-container">
                        <button className="portfolio__mobile-toggle portfolio__mobile-toggle--prev" onClick={this.toggleBack}>&laquo;</button>
                        <button className="portfolio__mobile-toggle portfolio__mobile-toggle--next" onClick={this.toggleNext}>&raquo;</button>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Portfolio;