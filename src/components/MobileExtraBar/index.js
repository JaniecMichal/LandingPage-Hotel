import React, { useState } from "react";
import "./style.css";
import pin from "../../images/pin.svg";
import menuIco from "../../images/menuIco.svg";
import searchIcon from "../../images/searchIcon.svg";
import Socials from "../Socials";

const MobileExtraBar = () => {
  const [hideNavigation, setHideNavigation] = useState(false);

  const showNavigationBar = () => {
    setHideNavigation(!hideNavigation);
  };

  return (
    <>
      <nav className={hideNavigation ? "visible" : "unvisible"}>
        <nav className="mobileNavigationBar">
          <ul className="mobileNavList">
            <li>
              <a href="#apartaments" className="mobileNavList__link">
                Apartaments
              </a>
            </li>
            <li>
              <a className="mobileNavList__link"> Restaurant </a>
            </li>
            <li>
              <a className="mobileNavList__link">Gallery </a>
            </li>
            <li>
              <a className="mobileNavList__link">Tips for tips </a>
            </li>
            <li>
              <a className="mobileNavList__link">Special Offers </a>
            </li>
            <li>
              <a className="mobileNavList__link">Contact </a>
            </li>
          </ul>
          <div className="langButtonWrapper">
            <button
              className="mobileNavList__language mobileNavList__language--active"
              active={true}
            >
              EN
            </button>
            <button className="mobileNavList__language">DE</button>
          </div>
          <Socials />
        </nav>
      </nav>
      <footer className="mobileBar">
        <button className="mobileBar__button">
          <img src={pin} alt="" />
        </button>
        <button className="mobileBar__button">
          Booking online <img src={searchIcon} alt="" className="searchIcon" />
        </button>
        <button
          className={`mobileBar__button ${
            hideNavigation ? "mobileBar__button--menuActive" : ""
          }`}
          onClick={showNavigationBar}
        >
          <img src={menuIco} alt="" />
        </button>
      </footer>
    </>
  );
};

export default MobileExtraBar;
