import './Projects.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import WheatherAPI from  '../../Images/WheatherAPI.png'
import ShoppingApp from '../../Images/ShoppingApp.png'
import RPS from '../../Images/RPS.jpg'
import ResponsiveDesign from '../../Images/ResponsiveDesign.png'


const Projects = () => {

    return (
        <div className='projects'>
        <Container>
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card>
                    <Card.Img variant="top" src={ShoppingApp} />
                    <Card.Body>
                    <Card.Title>My Shopping App</Card.Title>
                    <Card.Text>
                    An simple user interface using React.Js
                    </Card.Text>
                    <a href="https://github.com/NicuCulda/Homeworks/tree/main/my-shopping-website-with-react" target="_blank">
                        <Button 
                            variant="secondary" 
                            onClick={() => onClickOpenVavancy(id)}
                            style={{backgroundColor: "#def2f1" , color: 'black'}}>
                                Go to GitHub
                        </Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={WheatherAPI} />
                    <Card.Body>
                    <Card.Title>My wheather App with API</Card.Title>
                    <Card.Text>
                    Simple project using API for creating an whather app.
                    </Card.Text>
                    <a href="https://github.com/NicuCulda/Homeworks/tree/main/Weather%20app%20-%20API" target="_blank">
                        <Button 
                            variant="secondary" 
                            onClick={() => onClickOpenVavancy(id)}
                            style={{backgroundColor: "#def2f1", color: 'black'}}>
                            Go to GitHub
                        </Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card>
                    <Card.Img variant="top" src={ResponsiveDesign} />
                    <Card.Body>
                    <Card.Title>Responsive Design</Card.Title>
                    <Card.Text>
                        Creating an responsive design using Flex Box.
                    </Card.Text>
                    <a href="https://github.com/NicuCulda/Responsive_Design" target="_blank">
                        <Button 
                            variant="secondary" 
                            style={{backgroundColor: "#def2f1", color: 'black' }}>
                            Go to GitHub
                        </Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={RPS} />
                        <Card.Body>
                        <Card.Title>Rock,Scisors and Paper</Card.Title>
                        <Card.Text>
                        An replica for the game using DOM manipulation.
                        </Card.Text>
                        <a href="https://github.com/NicuCulda/Homeworks/tree/main/Rock%2C%20Paper%20%26%20Scissors%20Dome%20Manipulation" target="_blank">
                            <Button 
                                variant="secondary" 
                                onClick={() => onClickOpenVavancy(id)}
                                style={{backgroundColor: "#def2f1", color: 'black' }}>
                                    Go to GitHub
                            </Button>
                        </a>               
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
        </Container>
    </div>
    )
}

        
        


export default Projects