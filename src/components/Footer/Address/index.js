import React from "react";
import "./style.css";
import phoneIcon from "../../../images/callIcon.svg";
import mailIcon from "../../../images/mailIcon.svg";

const Address = ({ name, address, phoneNumber, mail }) => (
  <address>
    <h4 className="footer__headerTitle">Contact us</h4>
    <h5 className="footer__addressHeader">{name}</h5>
    <p className="footer__addressDescription">{address}</p>
    <a
      href={`tel:${phoneNumber}`}
      target="_blank"
      rel="noreferrer noopener"
      className="footer__addressDetails"
    >
      <img src={phoneIcon} alt="" className="footer__addressIcon" />{" "}
      {phoneNumber}
    </a>
    <a
      href={`mailto:${mail}`}
      target="_blank"
      rel="noreferrer noopener"
      className="footer__addressDetails"
    >
      <img src={mailIcon} alt="" className="footer__addressIcon" /> {mail}
    </a>
  </address>
);

export default Address;
