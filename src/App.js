import React from "react";
import About from "./components/About";
import { Education } from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div
      className="main-container"
      onClick={() => {
        const ref = document.querySelector(".nav");
        if (ref.classList.contains("show-sidebar")) {
          ref.classList.remove("show-sidebar");
        }
      }}
    >
      <Home />
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
    </div>
  );
};

export default App;
