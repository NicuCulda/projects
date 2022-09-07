import './AboutMe.css'
import React from 'react';
import myPic from '../../Images/img-intro.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typed from "react-typed"

const AboutMe = () => {


    return ( 
        <Container>
            <Row className='top-row'>
                <Col xs={12} md={6}>
                        <div className='about-left'>
                            <div className='about-left-wrapper'>
                                <h1>Hello, My Name Is</h1>                         
                                <h2 className='about-name'>Nicolae Culda</h2>
                                <img className='img-about' src={myPic} alt="" />
                            </div>
                        </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className='about-right'>
                        <div className='about-p'>
                            <p>I’ve been working in hospitality industry in the past 12 years, from which 5 years as team leader. This help me to improve my communication and teamwork skills into becoming a better version of me.</p>
                            <p>Being passionate about computers and new technology, I’ve developed an interest for programming, starting to learn web development(Javascript) made a strong impact for me to change my career path.</p>
                            <p>Programing helps me develop better creativity, critical thinking, reasoning and problem solving skills. Becoming an programmer I will be responsible for developing new ways to solve problems, which requires the ability to essentially “think-outside-the-box” to develop solutions.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default AboutMe;