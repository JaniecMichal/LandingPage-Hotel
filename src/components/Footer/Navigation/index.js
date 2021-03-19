import React from "react";
import "./style.css";

const Navigation = () => (
  <nav className="footer__nav">
    <h4 className="footer__headerTitle">Menu</h4>
    <ul className="footer__menu">
      <li className="footer__menuItem">
        <a href="#apartament" className="footer__menuLink">
          Apartaments
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#tips" className="footer__menuLink">
          Tips for tips
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#rental" className="footer__menuLink">
          Rental
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#restaurant" className="footer__menuLink">
          Restaurant
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#gallery" className="footer__menuLink">
          Gallery
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#about" className="footer__menuLink">
          About us
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#opinions" className="footer__menuLink">
          Opinions
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#contact" className="footer__menuLink">
          Contact
        </a>
      </li>
      <li className="footer__menuItem">
        <a href="#propertyManagment" className="footer__menuLink">
          Property managment
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
