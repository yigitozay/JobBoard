import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Navbarr.css'; 
import logo from "../../logo.png"

const Navbarr = () => {
  return (
    <Navbar className="bg-custom-blue justify-content-between" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img
            src={logo}
            height="50" 
            className="d-inline-block align-top navbar-logo"
            alt="Logo"
          />
          JobBoardTest
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#signup" className="nav-link-custom">Signup</Nav.Link>
          <Nav.Link href="#login" className="nav-link-custom">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
