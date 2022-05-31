import React from 'react';
import {Nav, Container,Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Link to="/Login">Login</Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}
