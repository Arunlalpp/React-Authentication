import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";

export default function NavLink() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="color" href="home">
              Emirates Car Care
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <LinkContainer to="/ourteam">
              <Nav.Link href="Ourteam">Ourteam</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/service">
              <Nav.Link href="service">services</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Login">
              <Nav.Link href="login">Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
