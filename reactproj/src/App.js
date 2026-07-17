import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Pages/Home/Homescreen/HomePage.jsx';
import Navbar from './Pages/Home/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AboutMe from './Pages/Home/AboutMe';
import Portfolio from './Pages/Home/Portfolio';
import ExperienceVar from './Pages/Home/ExperienceVar';
import {GatorHucker} from './Pages/Home/Projects/ProjectData/GatorHucker.js'
import ProjectPage from './Pages/Home/Projects/ProjectPage.jsx';
import { Awwmageddon } from './Pages/Home/Projects/ProjectData/Awwmageddon.js';
import { StickySituation } from './Pages/Home/Projects/ProjectData/Sticky Situation.js';
import { Obsession } from './Pages/Home/Projects/ProjectData/@Obsession.js';
import { FullStar } from './Pages/Home/Projects/ProjectData/FullStar.js';
import { LSystem } from './Pages/Home/Projects/ProjectData/L-System.js';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<AboutMe title={ExperienceVar.title} text={ExperienceVar.description}/>}/>
        <Route path='/projects' element={<Portfolio/>}/>


        // Project Routes ----
        <Route path='/projects/Gator Hucker' element={<ProjectPage project={GatorHucker}/>}/>
        <Route path="/projects/AwwMageddon" element={<ProjectPage project={Awwmageddon}/>}/>
        <Route path="/projects/@Obsession" element={<ProjectPage project={Obsession}/>}/>
        <Route path="/projects/Full Star" element={<ProjectPage project={FullStar}/>}/>
        <Route path="/projects/L-System Generator" element={<ProjectPage project={LSystem}/>}/>
        <Route path="/projects/Sticky Situation" element={<ProjectPage project={StickySituation}/>}/>
        
      </Routes>
      
    </Router>
  );
}

export default App;
