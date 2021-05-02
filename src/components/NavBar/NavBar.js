import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import resume from '../../resume/Resume_Sumaiya Nawsheen_WebDeveloper(1st Update).pdf'
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div class="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#projects">PROJECTS</Nav.Link>
      <Nav.Link href="#blog">BLOG</Nav.Link>
      <Nav.Link href="#contact">CONTACT</Nav.Link>
    </Nav>
    <Nav>
    <Button variant="outline-primary"> <Nav.Link href={resume} target = "_blank">RESUME</Nav.Link></Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default NavBar;