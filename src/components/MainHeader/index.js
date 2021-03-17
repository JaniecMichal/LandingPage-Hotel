import React from "react";
import "./style.css";
import NavigationBar from "./NavigationBar";
import SearchingForm from "./SearchingForm";

const MainHeader = () => {
  return (
    <header className="mainHeader">
      <NavigationBar />
      <h1 className="mainHeader__headerTitle">
        Take your breathe <br />
        in{" "}
        <strong className="mainHeader__headerTitle--strong">
          Zell am See - Kaprun
        </strong>
      </h1>
      <SearchingForm />
    </header>
  );
};

export default MainHeader;
