import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from '../CustomLink/CustomLink'
import Logo from '../../../images/logo.png'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-menu">
            <Nav.Link as={CustomLink} to="/home">Home</Nav.Link>
            <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
            <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
