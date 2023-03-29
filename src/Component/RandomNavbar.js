import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function RandomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#" className='mb-4'>My Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className='links' href="#">About</Nav.Link>
          <Nav.Link className='links' href="#">Services</Nav.Link>
          <Nav.Link className='links' href="#">Portfolio</Nav.Link>
          <Nav.Link className='links' href="#">Testimonials</Nav.Link>
          <Nav.Link className='links' href="#">Home</Nav.Link>
          <Nav.Link className='links' href="#">Contact Us</Nav.Link>
          <Nav.Link className='links' href="#">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default RandomNavbar;
