import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./style.css";

const Options = () => {
  const options = [
    {
      num: "1",
      value:
        "Ability to work with different skin types is something that is important to consider when choosing a tattoo placement and design.",
    },
    {
      num: "2",
      value:
        "Experience working on different materials, which helped us to understand how those or other tattoo materials behave and we were able to choose the best of the best for our clients.",
    },
    {
      num: "3",
      value:
        "We have developed our own personal styles of tattooing, this is important to make tattoos look beautiful and good healed in the future.",
    },
    {
      num: "4",
      value:
        "Ability to communicate well with different people, we are looking for an individual approach to everyone. We understand your fears and know how to work with them.",
    },
    {
      num: "5",
      value:
        "Analyzing service and customer focus in different countries, we saw both the best and worst service. And we took only the best from our experience.",
    },
    {
      num: "6",
      value: `The notion that your tattoo will be with you for the rest of your life! We don't just put a tattoo on your skin, we put energy into you that will energize you for the rest of your life.`,
    },
  ];

  return (
    <div className="optionsContainer">
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
          WHY US?
        </h2>
      </AnimatedOnScroll>
      <div className="optionContainer">
        <div className="option">
          {options.map(({ num, value }, index) => (
            <div className="opt" key={index}>
              <h3>{num}</h3>
              <p className="p-options">{value}</p>
            </div>
          ))}
        </div>
        {window.innerWidth > 600 ? (
          <div className="optionsPhotoContainer">
            <div className="rectangle_1"></div>
            <div className="rectangle_2"></div>
            <img
              src="options_photo.png"
              alt="options_photo"
              className="options_photo"
            />
          </div>
        ) : (
          <img src="option_img.png" alt="option_img" />
        )}
      </div>
    </div>
  );
};

export default Options;
