import './Menu.css'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from "react-router-dom"
import { Fragment } from 'react';


function Menu() {
  
  return (
    <div>
        <Navbar  expand="lg" bg="dark" variant="dark" fixed='top' collapseOnSelect >
        <Container>
            <Navbar.Brand as={Link} to="/">Nicolae Culda</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link eventKey="1" as={Link} to="/about">About Me</Nav.Link>
                <Nav.Link eventKey="2" as={Link} to="/skills">Skills</Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/education">Education</Nav.Link>
                <Nav.Link eventKey="4" as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link eventKey="5" as={Link} to="/contact">Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );

}

export default Menu;