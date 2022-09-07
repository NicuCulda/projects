import './Skills.css'
import React, { useEffect, useState  } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FaCss3, FaHtml5, FaJsSquare, FaReact, FaGit, FaGithub} from "react-icons/fa"



const Skills = () => {

return (
    <div className='skills'>
        <div className='progress-bar-title'><FaHtml5 color='red'/>Html</div>
        <ProgressBar now={90} label={`${90}%`} />
       
        <div className='progress-bar-title'><FaCss3 color='blue'/>CSS</div>
        <ProgressBar now={80} label={`${80}%`} />


        <div className='progress-bar-title'><FaJsSquare color='yellow'/>JavaScript</div>
        <ProgressBar now={60} label={`${60}%`} />
  
        <div className='progress-bar-title'><FaReact color='blue'/>React.Js</div>
        <ProgressBar now={60} label={`${60}%`} />
 
        <div className='progress-bar-title'><FaGit color='red'/>Git</div>
        <ProgressBar now={80} label={`${80}%`} />
  
        <div className='progress-bar-title'><FaGithub color='black'/>GitHub</div>
        <ProgressBar now={80} label={`${80}%`} />
    </div>
)  
}



export default Skills