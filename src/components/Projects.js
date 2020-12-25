import React from 'react';
import image0 from '../images/profile.jpg';
import image1 from '../images/profile.jpg';

class Projects extends React.Component {    
    render() {
        const images = [
            image0, image1
        ]

        return (
            <div id="projects" className="vsection">
                <h1>Projects</h1>
                <div id="project-container"> {
                    this.props.projects.map(project => {
                        return (
                            <div className="project">
                                <h2>{ project.title }</h2>
                                <div className="project-inner">
                                    <img src={ images[project.imageNum] } alt="Project" />
                                    <div className="project-info">
                                        <p>{ project.info }</p>
                                        <a href={ project.link }>
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                } </div>
            </div>
        );
    }
}

export default Projects;
