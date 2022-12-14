import './ContactMe.css'
import React from 'react'
import {useState} from "react"
import phone from '../../Images/telephone-fill.svg'
import envelope from '../../Images/envelope-fill.svg'
import map from '../../Images/geo-alt-fill.svg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Container from 'react-bootstrap/esm/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FaLinkedin,  FaGithub} from "react-icons/fa"


const ContactMe = () => {
    const [validated, setValidated] = useState(false);
    const formRef = useRef(null)
   
    const handleReset = () => {
      formRef.current.reset();
      setValidated(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_wkksfdn', 
            'template_qbc4xf8', 
            formRef.current, 'PiaIztszjHLVWDArf')
      .then((result) => {
          console.log(result.text);
          alert('Thank you for the message! :)')
      }, (error) => {
          console.log(error.text);
      } )
      setValidated(true);
      handleReset();
    }

    return (
        <div className='contact'>
            <Container >
            <Row>
            <Col lg={6} className='my-info'>               
                    <h1 className='contact-title'>Contact Me</h1>
                    <div className="contact-info-item">
                        <a href="tel:+4 0753 046 160">
                            <img className='contact-icon' src={phone} alt="" /> +4 0753 046 160</a>
                    </div>
                    <div className="contact-info-item">
                        <a href='mailto:culda_nicu@yahoo.com'>
                        <img className='contact-icon' src={envelope} alt="" /> culda_nicu@yahoo.com</a>
                    </div>
                    <div className="contact-info-item">
                            <img className='contact-icon' src={map} alt="" /> Cluj Napoca, Romania
                    </div>
                    <div className='buttons-link'>
                        <a href="https://github.com/NicuCulda/" target="_blank" className='btn-contact'>
                        <Button variant="secondary" style={{backgroundColor: "#def2f1" }}> 
                            <FaGithub color='black' />
                        </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/nicolaeculda/" target="_blank" className='btn-contact'>
                            <Button variant="secondary" style={{backgroundColor: "#def2f1" }}> 
                                <FaLinkedin color='blue' />
                            </Button>
                        </a>
                    </div>
                    
                    
            </Col>
            <Col lg={6} className='contact-form'>
                <h1 className='contact-title'>Contact Form</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Form.Group  controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required name='name' type='user_name' placeholder='Name' />
                    </Form.Group>
                    <Form.Group  controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control required name='email' type='user_email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group controlId="formGridSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control required name='subject' type='user_subject' placeholder='Subject' />
                    </Form.Group>
                    <Form.Group controlId="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control required name='message' as="textarea" type='Message' placeholder='Message' rows={5}/>
                    </Form.Group>
                    <Button 
                        onClick={handleSubmit} 
                        variant="secondary" type="submit" 
                        style={{backgroundColor: "#def2f1", color: 'black', margin: '8px 0px'}}>
                            Submit
                    </Button>
                </Form>
            </Col>   
            </Row>
        </Container>
        </div>
    )
}



export default ContactMe






