import './AboutMe.css'
import React from 'react';
import myPic from '../../Images/img-intro.jpg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
const AboutMe = () => {


    return ( 
        <div  className='about'>       
             <Container>
            <Row>
                <Col className='name' xs={12} md={6}>
                    <div className='about-title'>Hello, My Name Is</div>                         
                    <h2 className='about-name'>Nicolae Culda</h2>
                    <Image src={myPic} fluid></Image> 
                </Col>
                <Col xs={12} md={6}>
                        <div className='about-me'>
                            <p>I’ve been working in hospitality industry in the past 12 years, from which 5 years as team leader. This help me to improve my communication and teamwork skills into becoming a better version of me.</p>
                            <p>Being passionate about computers and new technology, I’ve developed an interest for programming, starting to learn web development(Javascript) made a strong impact for me to change my career path.</p>
                            <p>Programing helps me develop better creativity, critical thinking, reasoning and problem solving skills. Becoming an programmer I will be responsible for developing new ways to solve problems, which requires the ability to essentially “think-outside-the-box” to develop solutions.</p>
                        </div>
                </Col>
            </Row>
            <Row>
            <Col>
                <h2 className='work-title'>My Profesional Experience</h2>
            </Col>
            </Row>
            <Row className='experience'>
                <Col  xs={12} md={6}>
                    <h3 className='job-title'>Intership Front-End Web Development</h3>
                    <h4 className='place'>Școala Informală de IT | May - Sep 2022</h4>
                        <p>During this period I've learned front-end web development programing languages such as HTML, CSS, Javascript and React.JS, olso concepts as OOP, AJAX and Promises, ES6 and BOM.</p>
                </Col>
                <Col xs={12} md={6}>
                    <h3 className='job-title'>Server</h3>
                    <h4 className='place'>John's Island Club | Oct 2021 - May2022</h4>
                    <p>Ensured optimal guest experience by seating guest, taking orders, serving dishes and removing dinnerware promptly and with a positive atittude. 
                    Knowledgeably recommended menu items based on customer needs and preferences, including upselling complementary dishes and drinks;
                    </p>
                </Col>
                </Row>    
            </Container>
        </div>
    )
}

   
       


export default AboutMe;