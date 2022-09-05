import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Outlet, Link} from "react-router-dom"


function NavBar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed='top'>
        <Container>
            <Navbar.Brand as={Link} to="home">Nicolae Culda</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="AboutMe">About Me</Nav.Link>
                <Nav.Link as={Link} to="Skils">Skills</Nav.Link>
                <Nav.Link as={Link} to="Education">Education</Nav.Link>
                <Nav.Link as={Link} to="ContactMe">Contact Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  );

}

export default NavBar;