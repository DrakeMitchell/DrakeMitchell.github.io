import React from "react";
import Header from "./Header";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import {useRef} from "react"
import "./Styles/navbar.css"
import {FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return (
        <>
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Drake M</title>
            <link rel="icon" type="image/x-icon" href="./icon.png"/>
        </head>
        {/* <Header/> */}
        <header class="nav">
            <nav ref = {navRef}>
                <Link to="/" onClick={showNavbar}>Home</Link>
                <Link to="/" onClick={showNavbar}>Resume</Link>
                <Link to="/projects" onClick={showNavbar}>Projects</Link>
                <Link to="/" onClick={showNavbar}>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        </>
    );
};

export default Navbar;