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
            <br></br>
            <h2>My Profesional Experience</h2>
            <br></br>
            <Row>
                <Col xs={12} md={6}>
                    <h3>INTENRSHIP FRONT-END WEB DEVELOPMENT</h3>
                    <h4>Școala Informală de IT | May - Sep 2022</h4>
                    <p>During this period I've learned front-end web development programing languages such as HTML, CSS, Javascript and React.JS, olso concepts as OOP, AJAX and Promises, ES6 and BOM.</p>
                 </Col>
                <Col xs={12} md={6}>
                <h3>SERVER</h3>
                <h4>John's Island Club | Oct 2021 - May2022</h4>
                <p>
                Ensured optimal guest experience by seating guest, taking orders, serving dishes and removing dinnerware promptly and with a positive atittude. 
                Knowledgeably recommended menu items based on customer needs and preferences, including upselling complementary dishes and drinks;
                </p>
                </Col>
            </Row>
        </Container>
    )
}


export default AboutMe;