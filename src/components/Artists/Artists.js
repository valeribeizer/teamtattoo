import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ContactModal from "../ContactModal/ContactModal";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const Artists = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="artistsContainer" id="artists">
      <AnimatedOnScroll
        animationIn="fadeInRight"
        style={{
          animationDuration: "2000ms",
        }}
      >
        <h2
          style={{
            textDecoration: "underline 2px rgb(9, 141, 102)",
            textUnderlineOffset: "15px",
          }}
        >
          ARTISTS
        </h2>
      </AnimatedOnScroll>
      <Tab.Container defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant={window.innerWidth > 600 ? "pills" : "tabs"}
              className={window.innerWidth > 600 ? "flex-column" : ""}
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Violet</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Ray</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className="artistContainer">
                  {window.innerWidth > 600 ? (
                    <div className="artistPhoto">
                      <img
                        src="artist_violet.png"
                        alt="artist_1"
                        className="artist_photo"
                      />
                      <div className="artist_rectangle"></div>
                    </div>
                  ) : (
                    <img src="art_violet.png" alt="art_violet" />
                  )}
                  <div className="artistInfo">
                    <h2>VIOLET</h2>
                    <p style={{ marginBottom: "0" }}>
                      <span style={{ fontStyle: "italic" }}>Experience:</span> 4
                      years
                    </p>
                    <p style={{ marginBottom: "0" }}>
                      <span style={{ fontStyle: "italic" }}>Styles:</span> mini
                      tattoo, graphic, flora, mini shading, text tattoo, fine
                      line
                    </p>
                    <div className="iconsContainer">
                      <a href="https://www.instagram.com/mokka_tattoo/">
                        <img src="inst_icon.png" alt="inst" />
                      </a>
                      <a href="https://wa.me/46737069473">
                        <img src="whatsapp_icon.png" alt="whatsapp" />
                      </a>
                    </div>
                    <button onClick={() => setModalShow(true)}>
                      get in touch
                    </button>
                    <p className="p-artist-paragraph">
                      SHE creates aesthetics and minimalism, her element is
                      fine, tiny lines and small designs, she's careful of the
                      lines of your body and knows how to aesthetically position
                      your tattoo.
                    </p>
                  </div>
                  <ContactModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="artistContainer">
                  {window.innerWidth > 600 ? (
                    <div className="artistPhoto">
                      <img
                        src="artist_ray.png"
                        alt="artist_2"
                        className="artist_photo"
                      />
                      <div className="artist_rectangle"></div>
                    </div>
                  ) : (
                    <img src="art_ray.png" alt="art_ray" />
                  )}
                  <div className="artistInfo">
                    <h2>RAY</h2>
                    <p style={{ marginBottom: "0" }}>
                      <span style={{ fontStyle: "italic" }}>Experience:</span>
                      12 years
                    </p>
                    <p style={{ marginBottom: "0" }}>
                      <span style={{ fontStyle: "italic" }}>Styles:</span>
                      realistic, graphic, traditional
                    </p>
                    <div className="iconsContainer">
                      <a href="https://www.instagram.com/rz.ttoo/">
                        <img src="inst_icon.png" alt="inst" />
                      </a>
                      <a href="https://wa.me/46767434644">
                        <img src="whatsapp_icon.png" alt="whatsapp" />
                      </a>
                    </div>
                    <button onClick={() => setModalShow(true)}>
                      get in touch
                    </button>
                    <p className="p-artist-paragraph">
                      HE creates large, color and B&W projects, he has a lot of
                      artistic experience, your body is like a canvas for him
                      and he's like a true artist he's going to show all his
                      skill when he tattoos you.
                    </p>
                  </div>
                  <ContactModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Artists;
