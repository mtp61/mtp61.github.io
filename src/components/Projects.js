import React from 'react';
import image0 from '../images/esim1.png';
import image1 from '../images/ismcts.png';
import image2 from '../images/ppo.png';
import image3 from '../images/grid.png';
import image4 from '../images/cars.png';
import image5 from '../images/magnets.png';
import image6 from '../images/kingdom.png';
import image7 from '../images/ca2.png';
import image8 from '../images/fractal.png';

class Projects extends React.Component {    
    render() {
        const images = [
            image0, image1, image2, image3, image4, image5, image6, image7, image8
        ]

        return (
            <div id="projects" className="vsection">
                <div id="project-container"> 
                <h2>Projects</h2>
                    {this.props.projects.map(project => {
                        return (
                            <div className="project" key={ project.title }>
                                <h3>{ project.title }</h3>
                                <div className="project-inner">
                                    <img src={ images[project.imageNum] } alt="Project" />
                                    <div className="project-info">
                                        <p>{ project.info }</p>
                                        <a href={ project.link } target="_blank" rel="noreferrer">
                                            View on Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;
