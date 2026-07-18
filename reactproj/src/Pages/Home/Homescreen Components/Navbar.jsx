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
            <Link to="/">Resume</Link>
            <Link to="/projects" to="/projects">Projects</Link>
            <Link to="/">Contact</Link>
        </nav>
        </>
    );
};

export default Navbar;