import React from "react";
import "./style.css";

const Container = ({ children, pageVersion }) => (
  <main
    className={`mainContainer ${
      pageVersion ? " mainContainer--pageVersion" : ""
    }`}
  >
    {children}
  </main>
);

export default Container;
