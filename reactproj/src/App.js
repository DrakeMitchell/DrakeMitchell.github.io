import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Pages/Home/Homescreen/HomePage.jsx';
import Navbar from './Pages/Home/Homescreen Components/Navbar';
import {
    HashRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AboutMe from './Pages/Home/Homescreen Components/AboutMe';
import Portfolio from './Pages/Home/Homescreen Components/Portfolio';
import ProjectPage from './Pages/Home/Projects/ProjectPage.jsx';
import { ProjectOrder as proj } from './Pages/Home/Projects/ProjectData/ProjectOrder.js';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/#' element={<Home/>}/>
        <Route path='/#/resume' element={<AboutMe/>}/>
        <Route path='/#/projects' element={<Portfolio/>}/>

        // Project Routes ----
        {proj && proj.projects.length >0 && proj.projects.map((item, index) => (
          <Route path={item.url} element={<ProjectPage project={proj.projects[index]}/>}> </Route>
        ))}
        
      </Routes>
      
    </Router>
  );
}

export default App;
