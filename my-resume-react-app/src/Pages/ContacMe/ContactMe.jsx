import './ContactMe.css'
import React from 'react'
import {useState, useEffect} from "react"
import contactimg from '../../Images/contact.jpg'
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


const ContactMe = () => {
    const formRef = useRef(null)
    const [validated, setValidated] = useState(false);
    
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

        <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control required name='name' type='user_name' placeholder='Name' />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required name='email' type='user_email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control required name='subject' type='user_subject' placeholder='Subject' />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control required name='message' as="textarea" type='Message' placeholder='Message' rows={5}/>
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">Submit</Button>
        </Form>
    )
}


export default ContactMe






