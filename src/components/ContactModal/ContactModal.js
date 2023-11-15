import React from "react";
import Modal from "react-bootstrap/Modal";
import ContactForm from "../ContactForm/ContactForm";
import './style.css';

function ContactModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          leave your info here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm
          title="we'll get back shortly"
          name="name*"
          phone="phone*"
          email="email*"
          type="email"
        />
      </Modal.Body>
    </Modal>
  );
}

export default ContactModal;
