import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

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
     // adding the event when scroll change background
     window.addEventListener("scroll", changeBackground);
   });

  //  navbar ? "" : "bg-body-tertiary";
  return (
    <Navbar
      expand="lg"
      className={navbar ? "bg-body-tertiary-active" : "bg-body-tertiary"}
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">about</Nav.Link>
            <Nav.Link href="#artists">artists</Nav.Link>
            <Nav.Link href="#gallery">gallery</Nav.Link>
            <Nav.Link href="#faq">faq</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
