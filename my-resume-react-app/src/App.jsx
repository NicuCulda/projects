import './App.css'
import React from 'react';
import Menu from './Components/Menu/Menu'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutMe from './Pages/AboutMe/aboutMe';
import ContactMe from './Pages/ContacMe/contactMe';
import Education from './Pages/Education/Education';
import Skills from './Pages/Skills/Skills'
import Projects from './Pages/Projects/Projects';
import "bootstrap/dist/js/bootstrap.bundle.min"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Menu></Menu>
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/about' element = {<AboutMe />} />
            <Route path='/skills' element = {<Skills />} />
            <Route path='/education' element = {<Education />} />
            <Route path='/projects' element = {<Projects />} />
            <Route path='/contact' element = {<ContactMe/>} />
          </Routes>
        
      </BrowserRouter>

      
    </div>
    
  )
}

export default App
