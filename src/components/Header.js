import React from 'react';
import profile from '../images/profile.jpg';

class Header extends React.Component {
    render() {
        return (
            <div id="header" className="vsection">
                <div id="header-inner">
                    
                    <img src={ profile } alt="Profile" />
                    <div id="header-rightblock">
                        <h1>Matt Pauly</h1>
                        <p>Hello and welcome to my website!</p>
                        <div id="media-container">
                            <a href = "https://www.linkedin.com/in/matthew-pauly-l659b0a196/">
                                linkedin
                            </a>
                            <a href="https://github.com/mtp61">
                                github
                            </a>
                            <a href="https://www.instagram.com/matt.pauly/">
                                instagram
                            </a>
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}

export default Header;
