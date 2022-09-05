import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import AboutMe from './Pages/AboutMe/aboutMe';
import ContactMe from './Pages/ContacMe/contactMe';
import Education from './Pages/Education/Education';
import Intro from './Pages/Intro/Intro'
import Skills from './Pages/Skills/Skills'



function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <Routes>
            <Route path='/' element = {<HomePage />} />
            <Route path='/AboutMe' element = {<AboutMe />} />
            <Route path='/Skills' element = {<Skills />} />
            <Route path='/Education' element = {<Education />} />
            <Route path='/ContactMe' element = {<ContactMe/>} />
          </Routes>
        </NavBar>
        </BrowserRouter>

      
    </div>
    
  )
}

export default App
