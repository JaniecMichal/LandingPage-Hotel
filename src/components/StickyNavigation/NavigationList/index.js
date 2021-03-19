import React from "react";
import "./style.css";

const NavigationList = () => {
  return (
    <ul className="sitckyNavigationBar__navList">
      <li className="sitckyNavigationBar__navItem">
        <a href="#apartaments" className="sitckyNavigationBar__navLink">
          Apartaments
        </a>
      </li>
      <li className="sitckyNavigationBar__navItem">
        <a href="/#" className="sitckyNavigationBar__navLink">
          {" "}
          Restaurant{" "}
        </a>
      </li>
      <li className="sitckyNavigationBar__navItem">
        <a href="/#" className="sitckyNavigationBar__navLink">
          Gallery{" "}
        </a>
      </li>
      <li className="sitckyNavigationBar__navItem">
        <a href="/#" className="sitckyNavigationBar__navLink">
          Tips for tips{" "}
        </a>
      </li>
      <li className="sitckyNavigationBar__navItem">
        <a href="/#" className="sitckyNavigationBar__navLink">
          Special Offers{" "}
        </a>
      </li>
      <li className="sitckyNavigationBar__navItem">
        <a href="/#" className="sitckyNavigationBar__navLink">
          Contact{" "}
        </a>
      </li>
    </ul>
  );
};

export default NavigationList;
