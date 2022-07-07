import React from "react";
import "./Navigation.css";
import $ from 'jquery';



const NavBar = () => {
        
        return(
            <div id="wrapper">
                <div className="overlay"></div>
                <nav className="navbar" id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <div className="sidebar-header">
                            <div className="sidebar-brand">
                                <a href="#brand">Brand</a>
                            </div>
                        </div>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#followme">Follow me</a></li>
                    </ul>
                </nav>
                <div id="page-content-wrapper">
                    <button type="button" className="hamburger animated fadeInLeft is-closed" data-toggle="offcanvas" onClick= {
                        function(){
                            $(document).ready(function() {
                                var trigger = $('.hamburger'), overlay = $('.overlay'), isClosed = false;
                                trigger.on('click', function(){
                                    hamburger_cross();
                                });
                                function hamburger_cross() {
                                    if (isClosed === true) {
                                    overlay.hide();
                                    trigger.removeClass("is-open");
                                    trigger.addClass("is-closed");
                                    isClosed = false;
                                    } else {
                                    overlay.show();
                                    trigger.removeClass("is-closed");
                                    trigger.addClass("is-open");
                                    isClosed = true;
                                    }
                                }
                                $('[data-toggle="offcanvas"]').toggle('toggle', function () {
                                    $("#wrapper").toggleClass("toggled");
                                });
                            });}
                        }>
                        <span className="hamb-top"></span>
                        <span className="hamb-middle"></span>
                        <span className="hamb-bottom"></span>
                    </button>
                    <div className="container">
                        <div className="row">
                            <header className="py-5 mb-5">
                                <div className="container h-100">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12">
                                            <h1 id="header" className="display-4 text-black mt-5 mb-2"> </h1>
                                            <p id="header-description" className="lead mb-5 text-white-50"></p>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default NavBar;
