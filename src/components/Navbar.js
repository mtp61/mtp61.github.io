import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../assets/images/logo.png';

class Navbar extends React.Component {    
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div id="navbar">
                <img 
                    src={ logo }
                    className="logo"
                    alt="Logo" 
                    onClick={ this.scrollToTop }
                />
                <ul id="nav-items">
                    <li className="nav-item">
                        <Link 
                            activeClass="active"
                            to="projects"
                            smooth={ true }
                            duration={ 500 }
                            offset={ -50 }
                        >Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            activeClass="active"
                            to="about"
                            smooth={ true }
                            duration={ 500 }
                            offset={ -50 }
                        >About</Link>
                    </li>
                </ul>                
            </div>
        );
    }
}

export default Navbar;
