import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 170, clear: "both", paddingTop: 120, textAlign: "left" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
