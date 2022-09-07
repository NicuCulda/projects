import './Projects.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import projects from '../../Images/projects.png'

const Projects = () => {


    return (
        <Container>
            <Row xs={1} md={2} className="g-4" id='card-top'>
                <Col>
                <Card>
                    <Card.Img variant="top" src={projects} />
                    <Card.Body>
                    <Card.Title>My Shopping App</Card.Title>
                    <Card.Text>
                    App Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Rem iusto reprehenderit iste veniam laborum recusandae ipsum asperiores quasi!
                    </Card.Text>
                    <a href="https://github.com/NicuCulda/Homeworks/tree/main/my-shopping-website-with-react">
                        <Button variant="primary">Go to GitHub</Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={projects} />
                    <Card.Body>
                    <Card.Title>My wheather App with API</Card.Title>
                    <Card.Text>
                    App Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Rem iusto reprehenderit iste veniam laborum recusandae ipsum asperiores quasi!
                    </Card.Text>
                    <a href="https://github.com/NicuCulda/Homeworks/tree/main/Weather%20app%20-%20API">
                        <Button variant="primary">Go to GitHub</Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                <Card>
                    <Card.Img variant="top" src={projects} />
                    <Card.Body>
                    <Card.Title>Responsive Design</Card.Title>
                    <Card.Text>
                        App Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Rem iusto reprehenderit iste veniam laborum recusandae ipsum asperiores quasi!
                    </Card.Text>
                    <a href="https://github.com/NicuCulda/Responsive_Design">
                        <Button variant="primary">Go to GitHub</Button>
                    </a>
                    
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={projects} />
                        <Card.Body>
                        <Card.Title>Rock,Scisors and Paper</Card.Title>
                        <Card.Text>
                        App Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem iusto reprehenderit iste veniam laborum recusandae ipsum asperiores quasi!
                        </Card.Text>
                        <a href="https://github.com/NicuCulda/Homeworks/tree/main/Rock%2C%20Paper%20%26%20Scissors%20Dome%20Manipulation">
                            <Button variant="primary">Go to GitHub</Button>
                        </a>               
                        </Card.Body>
                    </Card>
                    </Col>
            </Row>
        </Container>
    )
}


export default Projects