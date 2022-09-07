import './HomePage.css'
import React from "react"
import Typed from "react-typed"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




const HomePage = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <div className='header-wraper'>
                        <div className='main-info'>
                            <h1>My Online Resume</h1>
                            <div>
                                <Typed
                                className="typed-text"
                                strings={['Web Development', 'Front-End Development', 'JavaScript Development']} 
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                                />
                            </div>
                        </div>
                    </div>


                </Col>
            </Row>
        </Container>
        

    )
}





export default HomePage