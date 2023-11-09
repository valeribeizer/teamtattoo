import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./style.css";

const Artists = () => {
  // const [currentTab, setCurrentTab] = useState("first");
  // const handleSelect = (eventKey) => {
  //   setCurrentTab("second");
  // };
  return (
    <div className="artistsContainer">
      <h2>ARTISTS</h2>
      <div className="underline"></div>
        <Tab.Container
          defaultActiveKey="first"
          // activeKey={currentTab}
          // onSelect={(key) => setCurrentTab(key)}
        >
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
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
                    <div className="artistPhoto">
                      <img
                        src="artist_violet.png"
                        alt="artist_1"
                        className="artist_photo"
                      />
                      <div className="artist_rectangle"></div>
                    </div>
                    <div className="artistInfo">
                      <h2>VIOLET</h2>
                      <p style={{ marginBottom: "0" }}>
                        <span style={{ fontStyle: "italic" }}>Experience:</span>{" "}
                        4 years
                      </p>
                      <p style={{ marginBottom: "0" }}>
                        <span style={{ fontStyle: "italic" }}>Styles:</span>{" "}
                        mini tattoo, graphic, flora, mini shading, text tattoo,
                        fine line
                      </p>
                      <div className="iconsContainer">
                        <a>
                          <img />
                        </a>
                        <a>
                          <img />
                        </a>
                      </div>
                      <button>get in touch</button>
                      <p className="p-artist-paragraph">
                        SHE creates aesthetics and minimalism, her element is
                        fine, tiny lines and small designs, she's careful of the
                        lines of your body and knows how to aesthetically
                        position your tattoo.
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
    </div>
  );
};

export default Artists;
