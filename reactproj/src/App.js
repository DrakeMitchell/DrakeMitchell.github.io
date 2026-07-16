import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Pages/Home/Homescreen';
import Navbar from './Pages/Home/Navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import AboutMe from './Pages/Home/AboutMe';
import Portfolio from './Pages/Home/Portfolio';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<AboutMe/>}/>
        <Route path='/projects' element={<Portfolio/>}/>
      </Routes>

    </Router>
  );
}

export default App;
