import React from "react";
import NavigationBar from "./NavigationBar";
import SearchingForm from "./SearchingForm";
import borderWave from "../../images/pageWave.svg";
import logo from "../../images/logoWhite.svg";
import "./style.css";

const MainHeader = ({ pageSection, pageTitle }) => {
  if (pageSection === false || pageSection === undefined) {
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
  }
  return (
    <header className={`mainHeader ${pageSection ? "mainHeader--page" : ""}`}>
      <img src={logo} alt="logo" className="pageLogo" />
      <div className="pageWrapper">
        <NavigationBar pageVersion={pageSection} />
        <h1
          className={`mainHeader__headerTitle ${
            pageSection ? "mainHeader__headerTitle--page" : ""
          }`}
        >
          {pageTitle}
        </h1>
        {pageSection ? (
          <img src={borderWave} alt="" className="pageWave" />
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default MainHeader;
