import React from "react";
import "../styles/Experience.css";
import { useSelector } from "react-redux";
import SwipeableTextMobileStepper from "./exp-car";

const Experience = () => {
  let person = null;
  person = useSelector((state) => state.fetch.person);
  return (
    <div id="experience">
      <h1>Experience</h1>
      <div className="exp-container">
        <SwipeableTextMobileStepper person={person} />
      </div>
    </div>
  );
};

export default Experience;
