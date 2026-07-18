import React from "react";
import Header from "./Header";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

const Navbar = () => {
    return (
        <>
        {/* <Header/> */}
        <nav>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects" to="/projects">Projects</Link>
            <a to="/contact">Contact</a>
        </nav>
        </>
    );
};

export default Navbar;