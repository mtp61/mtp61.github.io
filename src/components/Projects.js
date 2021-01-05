import React from 'react';
import image0 from '../assets/images/esim1.png';
import image1 from '../assets/images/ismcts.png';
import image2 from '../assets/images/ppo.png';
import image3 from '../assets/images/grid.png';
import image4 from '../assets/images/cars.png';
import image5 from '../assets/images/magnets.png';
import image6 from '../assets/images/kingdom.png';
import image7 from '../assets/images/ca2.png';
import image8 from '../assets/images/fractal.png';

class Projects extends React.Component {
    // add link tags based on markdown formatting
    parseLinks(text) {
        let openB = text.search('\\[');
        let closeB = text.search('\\]');
        let openP = text.search('\\(');
        let closeP = text.search('\\)');

        // recursive base case and error checking
        if (openB === -1 || closeB === -1 || openP === -1 || closeP === -1
            || !(openB < closeB && closeB < openP && openP < closeP)) {
            return text;
        }

        // recursive case
        let startText = text.slice(0, openB);
        let url = text.slice(openP + 1, closeP);
        let linkText = text.slice(openB + 1, closeB);
        let endText = this.parseLinks(text.slice(closeP + 1));
        return (
            <React.Fragment>
                {startText}
                <a href={url}>{linkText}</a>
                {endText}
            </React.Fragment>
        );
    }
    
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
                                        <p>
                                            { this.parseLinks(project.info) }
                                        </p>
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
