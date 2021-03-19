import React, { useState } from "react";
import DatePicker from "react-date-picker";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import searchIcon from "../../../images/searchIcon.svg";

const SearchingForm = () => {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());

  return (
    <form className="searchingForm">
      <button className="searchingForm__mobileButton">Booking online</button>
      <div className="inputWrapper ">
        <label className="searchingForm__label">Check in</label>
        <DatePicker
          onChange={setArrivalDate}
          value={arrivalDate}
          className={"searchingForm__input"}
          locale={"en-EN"}
        />
      </div>
      <div className="inputWrapper ">
        <label className="searchingForm__label">Check out</label>
        <DatePicker
          onChange={setDepartureDate}
          value={departureDate}
          className={"searchingForm__input"}
          locale={"en-EN"}
        />
      </div>
      <div className="inputWrapper ">
        <label className="searchingForm__label">Guests</label>
        <TextField
          id="standard-number"
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
        <button className="searchingForm__button">
          <span>Search apartament</span>
          <img src={searchIcon} alt="" />
        </button>
      </div>
    </form>
  );
};

export default SearchingForm;
