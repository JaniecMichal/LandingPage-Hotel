import React from "react";
import "./style.css";
import submitIcon from "../../../images/contactSubmitButton.svg";

const Contact = () => (
  <form className="footer__contactForm">
    <h4 className="footer__headerTitle">Contact form</h4>
    <input
      type="text"
      placeholder="Name"
      className="footer__formInput"
      required
    />
    <input
      type="email"
      placeholder="Email"
      className="footer__formInput"
      required
    />
    <div className="footer__wrapper">
      <textarea
        placeholder="Message"
        className="footer__formInput footer__formInput--textArea"
        required
      ></textarea>
      <button type="submit" className="footer__formButton">
        <img src={submitIcon} alt="" />
      </button>
    </div>
  </form>
);

export default Contact;
