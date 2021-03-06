import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import logo from '../assets/images/logo.png';

class Footer extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };  

    render() {
        return (
            <div id="footer">                
                <img 
                    src={ logo }
                    className="logo"
                    alt="Logo" 
                    onClick={ this.scrollToTop }
                />
            </div>
        );
    }
}

export default Footer;
