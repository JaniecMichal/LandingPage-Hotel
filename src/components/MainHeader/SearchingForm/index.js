import React from "react";
import "./style.css";
import searchIcon from "../../../images/searchIcon.svg";

const SearchingForm = () => (
  <form className="searchingForm">
    <div className="inputWrapper ">
      <label className="searchingForm__label">Check in</label>
      <input type="date" className="searchingForm__input" />
    </div>
    <div className="inputWrapper ">
      <label className="searchingForm__label">Check out</label>
      <input type="date" className="searchingForm__input" />
    </div>
    <div className="inputWrapper ">
      <label className="searchingForm__label">Guests</label>
      <input type="number" className="searchingForm__input" />
    </div>
    <div>
      <button className="searchingForm__button">
        <span>Search apartament</span>
        <img src={searchIcon} alt="" />
      </button>
    </div>
  </form>
);

export default SearchingForm;
