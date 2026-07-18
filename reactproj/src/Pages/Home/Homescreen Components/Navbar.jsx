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
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Drake M</title>
            <link rel="icon" type="image/x-icon" href="./icon.png"/>
        </head>,
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