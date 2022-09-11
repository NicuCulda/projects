import './Skills.css'
import React, { useEffect, useState  } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FaCss3, FaHtml5, FaJsSquare, FaReact, FaGit, FaGithub} from "react-icons/fa"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





const Skills = () => {
    let progressInterval = null;
    const SkillBar = ()  => {
        const [progress, setProgress] = useState(0);
 
        useEffect(() => {
          progressInterval = setInterval(() => {
            setProgress(prev => prev + 1);
          }, 100);
        }, []);
       
        useEffect(() => {
          if (progress >= 100) {
            clearInterval(progressInterval);
          }
        }, [progress]);
    
      return (
        <ProgressBar  now={progress} label={`${progress}%`} />
      )
    }
    
      

    
return (
    <Container>
        <Row>
            <Col>
            <div className='skills'>
                <div className='progress-bar-title'><FaHtml5 color='red'/>Html</div>
                <SkillBar />
            
                <div className='progress-bar-title'><FaCss3 color='blue'/>CSS</div>
                <ProgressBar now={80} label={`${80}%`}/>

                <div className='progress-bar-title'><FaJsSquare color='yellow'/>JavaScript</div>
                <ProgressBar now={60} label={`${60}%`} />
        
                <div className='progress-bar-title'><FaReact color='blue'/>React.Js</div>
                <ProgressBar now={60} label={`${60}%`} />
        
                <div className='progress-bar-title'><FaGit color='red'/>Git</div>
                <ProgressBar now={80} label={`${80}%`} />
        
                <div className='progress-bar-title'><FaGithub color='black'/>GitHub</div>
                <ProgressBar now={80} label={`${80}%`} />
            </div>
            </Col>
        </Row>
       
        
        <Row>
            <Col>
                <h2 className='edu-title'>Education</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={6}>
                <h4>Școala Infromală de IT May - September 2022</h4>
                <p>Front-End Development</p>
            </Col>
            <Col xs={12} md={6}>
                <h4>Bachelor In Management 2010 - 2014</h4>
                <p>University UBB FSEGA, Cluj Napoca</p>
            </Col>
        </Row>

     
 

    </Container>
    
)  
}



export default Skills