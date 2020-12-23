import React from 'react';
import profile from '../images/profile.jpg';

class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <img src={ profile } id="header-img" alt="Profile" />
                <h1>Matt Pauly</h1>
            </div>
        );
    };
}

export default Header;
