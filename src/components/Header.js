import React from 'react';
import profile from '../assets/images/profile.jpg';
import resume from '../assets/MatthewPaulyResume.pdf';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div id="header-inner">
                    <img src={ profile } alt="Profile" />
                    <div id="header-rightblock">
                        <h1>Matt Pauly</h1>
                        <br />
                        <h3>Welcome to my website!</h3>
                        <br />
                        <div id="media-container">
                            <a href={resume} target="_blank" rel="noreferrer">
                                resume
                            </a>
                            <a href="https://www.linkedin.com/in/matthew-pauly-659b0a196/" target="_blank" rel="noreferrer">
                                linkedin
                            </a>
                            <a href="https://github.com/mtp61" target="_blank" rel="noreferrer">
                                github
                            </a>
                            <a href="mailto:mpauly@college.harvard.edu">
                                email
                            </a>
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}

export default Header;
