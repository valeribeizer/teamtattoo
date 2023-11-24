import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

const ContactForm = (props) => {
  const formInitialDetails = {
    name: "",
    email: "",
    phone: "",
  };

  const [buttonText, setButtonText] = useState("send");
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      formDetails.name.length !== 0 &&
      formDetails.phone.length !== 0 &&
      formDetails.email.length !== 0
    ) {
      emailjs
        .sendForm(
          "service_s5hiexk",
          "template_ni0imaa",
          e.target,
          "g3lRXYQqlKOkmc1vN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setFormDetails(formInitialDetails);
      setButtonText("sent!");
    } else {
      setButtonText("check fields!");
    }
  };

  return (
    <div className="modalContainer">
      <h4>{props.title}</h4>
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder={props.name}
          value={formDetails.name}
          onChange={(e) => onFormUpdate("name", e.target.value)}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder={props.phone}
          value={formDetails.phone}
          onChange={(e) => onFormUpdate("phone", e.target.value)}
          required
        />
        <input
          type={props.type}
          name="email"
          placeholder={props.email}
          value={formDetails.email}
          onChange={(e) => onFormUpdate("email", e.target.value)}
        />
        <button
          className="homeBtn"
          type="submit"
          onClick={props.onClick}
          style={{ marginTop: "10px" }}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
