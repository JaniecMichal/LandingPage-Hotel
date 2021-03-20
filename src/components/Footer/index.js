import React from "react";
import "./style.css";
import lightLine from "../../images/lightLine.svg";
import pinkLine from "../../images/pinkLine.svg";
import logo from "../../images/logoWhite.svg";
import hwsLogo from "../../images/hwsLogo.svg";
import Address from "./Address";
import Socials from "../Socials";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Stats from "./Stats";

const Footer = ({ pageVersion }) => {
  return (
    <footer className="footerClass">
      {!pageVersion ? <Stats /> : ""}

      <header className="footer__header">
        <img src={logo} alt="logo" />
      </header>

      {pageVersion ? <Stats pageVersion={pageVersion} /> : ""}

      <img src={lightLine} alt="" className="footer__line" />

      <div className="footer__content">
        <Address
          name={"Praga.at"}
          address={"Krakowska 20/29, 30-300 Kaprun, Austria"}
          phoneNumber={"+43 600 400 500"}
          mail={"contact@apartaments.com"}
        />
        <Navigation />

        <Contact />
      </div>
      <img src={pinkLine} alt="" className="footer__line" />

      <div className="footer__copyrightSocials">
        <div className="footer__copyright">
          <p className="footer__copyrightText">
            {" "}
            Copyright © 2021 by Hotelwsieci
          </p>
          <img src={hwsLogo} alt="hwsLogo" />
        </div>

        <Socials className={"footer__socials"} />
      </div>
    </footer>
  )
};

export default Footer;
