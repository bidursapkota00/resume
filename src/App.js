import React from "react";
import About from "./components/About";
import { Education } from "./components/Education";
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
    </div>
  );
};

export default App;
