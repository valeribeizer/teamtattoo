import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleCollapse = () => {
    var nav = document.getElementById("basic-navbar-nav");
    nav.classList.remove("show");
  };

   const changeBackground = () => {
     console.log(window.scrollY);
     if (window.scrollY >= 66) {
       setNavbar(true);
     } else {
       setNavbar(false);
     }
   };

   useEffect(() => {
     changeBackground();
     window.addEventListener("scroll", changeBackground);
   });

  return (
    <Navbar
      expand="lg"
      className={navbar ? "bg-body-tertiary-active" : "bg-body-tertiary"}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="logo.png" alt="logo" style={{ width: '140px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='navBtn' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" onClick={handleCollapse}>
              about
            </Nav.Link>
            <Nav.Link href="#artists" onClick={handleCollapse}>
              artists
            </Nav.Link>
            <Nav.Link href="#gallery" onClick={handleCollapse}>
              gallery
            </Nav.Link>
            <Nav.Link href="#faq" onClick={handleCollapse}>
              faq
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
