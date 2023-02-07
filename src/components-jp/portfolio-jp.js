import React, { useState } from 'react';
import ReactPlayer from "react-player";

import './portfolio-jp.scss';
import projects from  '../data/project-data.json';

export default function Portfolio() {

    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const findIndexOfSelectedProject = () => {
        const index = projects.findIndex(project => project === selectedProject)
        return index
    }

    const toggleNext = () => {
        if (findIndexOfSelectedProject() + 1 === projects.length) {
            setSelectedProject(projects[0]);
        } else {
            setSelectedProject(projects[findIndexOfSelectedProject() + 1]);
        }
    }

    const toggleBack = () => {
        if (findIndexOfSelectedProject() - 1 === -1) {
            setSelectedProject(projects[projects.length-1]);
        } else {
            setSelectedProject(projects[findIndexOfSelectedProject() - 1]);
        }
    }

    return (
        <div className="portfolio">
            <div className="portfolio__header">PORTFOLIO</div>
            <div className="portfolio__content">

                <div className="portfolio__prev-container-content">
                    <div className="portfolio__toggle-container-wrapper">
                        <div className="portfolio__toggle-container portfolio__toggle-container--prev">
                            <button className="portfolio__toggle portfolio__toggle--prev" onClick={toggleBack}>&laquo;prev</button>
                        </div>
                        <div className="portfolio__prev-details">
                            <div className="portfolio__prev-title">{selectedProject['title']}</div>
                            <div className="portfolio__prev-desc">{selectedProject['desc']}</div>
                            <div className="portfolio__prev-stack"><b>Built With</b>: {selectedProject['stack']}</div>
                            <div className="portfolio__prev-github-container">
                                <a className="portfolio__prev-github" href={selectedProject['github']} target="_blank" rel="noreferrer">GitHub Repository</a>
                        </div>
                    </div>
                        <div className="portfolio__toggle-container portfolio__toggle-container--next">
                            <button className="portfolio__toggle portfolio__toggle--next" onClick={toggleNext}>next&raquo;</button>
                        </div>
                    </div>
                    <div className="portfolio__player-container">
                        <ReactPlayer className='portfolio__react-player' url={selectedProject['youtube']} width="100%" height="100%"/>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
