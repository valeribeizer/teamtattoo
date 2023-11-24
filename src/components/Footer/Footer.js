import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <Navbar.Brand href="#home">
        <img src="logo.png" alt="logo" />
      </Navbar.Brand>
      {window.innerWidth > 600 ? (
        <Nav style={{ display: "block" }}>
          <Nav.Link href="#about">about</Nav.Link>
          <Nav.Link href="#artists">artists</Nav.Link>
          <Nav.Link href="#gallery">gallery</Nav.Link>
          <Nav.Link href="#faq">faq</Nav.Link>
        </Nav>
      ) : (
        ""
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>+46 76 743 46 44</p>
        <p>+46 73 706 94 73</p>
        <p>tattooteam@gmail.com</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>RAY</h4>
        <div className="iconsContainer">
          <a href="https://www.instagram.com/rz.ttoo/">
            <img className="icons_footer" src="inst_icon.png" alt="inst" />
          </a>
          <a href="https://wa.me/46767434644">
            <img
              className="icons_footer"
              src="whatsapp_icon.png"
              alt="whatsapp"
            />
          </a>
        </div>
        <br />
        <h4>VIOLET</h4>
        <div className="iconsContainer">
          <a href="https://www.instagram.com/mokka_tattoo/">
            <img className="icons_footer" src="inst_icon.png" alt="inst" />
          </a>
          <a href="https://wa.me/46737069473">
            <img
              className="icons_footer"
              src="whatsapp_icon.png"
              alt="whatsapp"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
