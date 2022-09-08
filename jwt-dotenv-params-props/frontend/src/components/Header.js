import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link> 
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/user/maham">
          <Nav.Link>User</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};
