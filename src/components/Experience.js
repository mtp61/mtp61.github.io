import React from 'react';

// add link tags based on markdown formatting
// TODO this should be in its own file
//    not exactly sure how to do that but it is used in this class
//    and in Projects.js
const parseLinks = (text) => {
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
    let endText = parseLinks(text.slice(closeP + 1));
    return (
        <React.Fragment>
            {startText}
            <a href={url}>{linkText}</a>
            {endText}
        </React.Fragment>
    );
}

class Experience extends React.Component {    
    render() {
        return (
            <div id="experience" className="vsection">
                <div id="experience-container"> 
                <h2>Experience</h2>
                    {this.props.experience.map(experience => {
                        return (
                            <div className="experience-item" key={ experience.title }>
                                <h3>{ experience.title }</h3>
                                <div className="experience-inner">
                                    <strong>
                                        <div className="experience-tagline">    
                                            <p className="experience-organization">{ experience.organization }</p>
                                            <p className="experience-daterange">{ experience.daterange }</p>
                                        </div>
                                    </strong>
                                    <div className="experience-info">   
                                        <p>
                                            { parseLinks(experience.info) }
                                        </p>
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

export default Experience;
