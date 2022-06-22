import React from "react";
import "./Navigation.css"; 
import myFunction from "./script";




const NavBar =()=>{
    return(
        <div>
            <button id="navbar" className="navbar" onClick={myFunction}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </button>
            <div id="menu" className="menu">
                <ul>
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
            </div>
        </div>
    );
}


export default NavBar;
