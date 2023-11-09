import React from "react";
import "./style.css";

const About = () => {
  return (
    <div id="about" className="aboutContainer">
      <div className="imgContainer">
        <img className="img_about" src="about_photo.png" alt="about" />
        <div className="border_img"></div>
      </div>
      <div className="textContainer">
        <h2>WELCOME TO TATTOO TEAM</h2>
        <p>
          We are seasoned experts in many styles, ready to create customized
          designs. We will be able to design any sketch you desire.
        </p>
        <p>
          Whether you're getting your first tattoo or adding to your collection
          of existing tattoos, our Tattoo team is definitely the right choice
          in terms of quality and comfort!
        </p>
      </div>
    </div>
  );
};

export default About;
