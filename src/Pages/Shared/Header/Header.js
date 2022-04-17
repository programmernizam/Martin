import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import Logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => [signOut(auth)];
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-menu">
            <Nav.Link as={CustomLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blogs
            </Nav.Link>
            {user ? (
              <div className="d-flex align-items-center">
                <h5 className="text-white">{user.displayName}</h5>
                <Button onClick={handleSignOut} variant="warning">
                SignOut
              </Button>
              </div>
            ) : (
              <Nav.Link as={CustomLink} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
