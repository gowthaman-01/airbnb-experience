import React from "react";
import airbnbLogo from "../../src/images/airbnb-logo.png"
import '../style.css';

const Navbar = () => {
    return (
        <a href="https://www.airbnb.com" rel="noreferrer" target="_blank" className="navbar-link">
            <nav className="navbar">
                <img alt="" src={airbnbLogo} className="airbnb-logo"></img>
                <h2 className="airbnb-title">airbnb</h2>
            </nav>
        </a>


    )
}

export default Navbar;