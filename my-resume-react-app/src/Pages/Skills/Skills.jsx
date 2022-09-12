import './Skills.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { FaCss3, FaHtml5, FaJsSquare, FaReact, FaGit, FaGithub} from "react-icons/fa"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Skills = () => {
    
return (
  <div className='skills'>
    <Container>
        <Row>
            <Col>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics" target="_blank" className='btn'>
                        <Button variant="secondary" style={{backgroundColor: "2b7a78" }}> 
                        <FaHtml5 color='red'/> Html
                        </Button>
                </a>
                <ProgressBar variant="html-bar" animated now={85} label={`${85}%`}/>
            
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className='btn'>
                        <Button variant="secondary" style={{backgroundColor: "2b7a78" }}> 
                        <FaCss3 color='blue'/> CSS
                        </Button>
                </a>
                <ProgressBar variant="css" animated now={80} label={`${80}%`}/>

                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className='btn'>
                        <Button variant="secondary" style={{backgroundColor: "2b7a78" }}> 
                        <FaJsSquare color='yellow'/> JavaScript
                        </Button>
                </a>
                <ProgressBar variant="java" animated now={60} label={`${60}%`} />

                <a href="https://reactjs.org/" target="_blank" className='btn'>
                        <Button variant="secondary" style={{backgroundColor: "2b7a78" }}> 
                        <FaReact color='blue'/> React.Js
                        </Button>
                </a>
                <ProgressBar variant="react" animated now={60} label={`${60}%`} />

                <a href="https://git-scm.com/" target="_blank" className='btn'>
                        <Button variant="secondary" style={{backgroundColor: "2b7a78" }}> 
                        <FaGit color='red'/> Git
                        </Button>
                </a>

                <ProgressBar variant="git" animated now={80} label={`${80}%`} />

                <a href="https://github.com/" target="_blank" className='btn'>
                        <Button variant="secondary" style={{backgroundColor: "2b7a78" }}> 
                            <FaGithub color='black' /> GitHub
                        </Button>
                </a>
                <ProgressBar variant="git-hub" animated now={80} label={`${80}%`} />
            
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
  </div>
)  
}



export default Skills