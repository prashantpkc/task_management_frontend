import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add your logout logic here
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          Your Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {isLoggedIn ? (
              <>
                <Nav.Link onClick={() => navigate("/page1")} className="mr-3">Page 1</Nav.Link>
                <Nav.Link onClick={() => navigate("/page2")}>Page 2</Nav.Link>
                <Nav.Link onClick={handleLogout} className="ml-3">Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link onClick={() => navigate("/")} className="mr-3">Login</Nav.Link>
                <Nav.Link onClick={() => navigate("/register")}>Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
