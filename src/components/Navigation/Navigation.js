import React from "react";
import "./Navigation.css"; 
import myFunction from "./script";


const NavBar = () => {
    return(
        <div id="wrapper">
            <div id="sidebar">
            <nav id="menu" className="nav-inverse fixed-top">
                <ul className="sidebar-nav">
                    <div className="sidebar-header">
                    </div>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="landingPage">
                <button type="button" id="navbar" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas" onClick={myFunction}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </button>
            </div>
            </div>
        </div>
        
    );
}


export default NavBar;
