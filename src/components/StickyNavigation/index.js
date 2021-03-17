import React from "react";
import "./style.css";
import NavigationList from "./NavigationList";
import logo from "../../images/logo.svg";
import Socials from "../Socials";

const StickyNavigation = () => {
  return (
    <nav className="stickyNavigationBar">
      <img src={logo} alt="logo" className="logo logo--stickyNav" />

      <NavigationList />

      <Socials className={"sitckyNavigationBar__socials"} />

      <button className="searchingForm__button searchingForm__button--stickyMenu">
        Booking online
      </button>
    </nav>
  );
};

export default StickyNavigation;
