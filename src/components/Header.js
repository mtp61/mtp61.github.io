import React from 'react';
import profile from '../images/profile.jpg';

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
                            <a href="https://www.linkedin.com/in/matthew-pauly-l659b0a196/" target="_blank" rel="noreferrer">
                                linkedin
                            </a>
                            <a href="https://github.com/mtp61" target="_blank" rel="noreferrer">
                                github
                            </a>
                            <a href="https://www.instagram.com/matt.pauly/" target="_blank" rel="noreferrer">
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
