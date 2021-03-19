import React from "react";
import logo from "../../../images/logo.svg";
import "./style.css";

const NavigationBar = () => {
  return (
    <ul className="mainNavigationBar">
      <li className="mainNavigationBar__navigationItem">
        <a href="#apartaments" className="mainNavigationBar__navigationLink">
          Apartaments
        </a>
      </li>
      <li className="mainNavigationBar__navigationItem">
        <a href="" className="mainNavigationBar__navigationLink">
          {" "}
          Restaurant{" "}
        </a>
      </li>
      <li className="mainNavigationBar__navigationItem">
        <a href="" className="mainNavigationBar__navigationLink">
          Gallery{" "}
        </a>
      </li>
      <li className="mainNavigationBar__navigationItem mainNavigationBar__navigationItem--logo">
        <img src={logo} alt="logo" className="logo" />
      </li>
      <li className="mainNavigationBar__navigationItem">
        <a href="" className="mainNavigationBar__navigationLink">
          Tips for tips{" "}
        </a>
      </li>
      <li className="mainNavigationBar__navigationItem">
        <a href="" className="mainNavigationBar__navigationLink">
          Special Offers{" "}
        </a>
      </li>
      <li className="mainNavigationBar__navigationItem">
        <a href="" className="mainNavigationBar__navigationLink">
          Contact{" "}
        </a>
      </li>
      <li className="mainNavigationBar__navigationItem">
        <select className="mainNavigationBar__language">
          <option>EN</option>
          <option>DE</option>
        </select>
      </li>
    </ul>
  );
};

export default NavigationBar;
