import React, { useState } from "react";
import "./style.css";
import ContactModal from "../ContactModal/ContactModal";

const HomeScreen = () => {
  const [modalShow, setModalShow] = useState(false);
  const srcImg =
    window.innerWidth > 600
      ? "home_screen_photo.png"
      : "home_screen_photo_mobile.jpeg";

      const styles = {
        borderRadius: window.innerWidth > 600 ? "" : "20px",
      };
  return (
    <div id="home" className="homeScreenContainer">
      <div className="j">
        <div className="titleContainer">
          <h1>TATTOO TEAM</h1>
          <h6>
            A perfect place for anyone looking for an amazing tattoo experience!
          </h6>
          <button onClick={() => setModalShow(true)}>free consultation</button>
        </div>
        <img
          src={srcImg}
          style={styles}
          alt="main_photo"
        />
      </div>
      <ContactModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default HomeScreen;
