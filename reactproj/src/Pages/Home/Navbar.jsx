import React from "react";
import Header from "./Header";

const Navbar = () => {
    return (
        <>
        <Header/>
        <nav>
            <a href="/" to="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/projects" to="/projects">Projects</a>
            <a to="/contact">Contact</a>
        </nav>
        </>
    );
};

export default Navbar;