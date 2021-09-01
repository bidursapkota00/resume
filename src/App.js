import React from "react";
import Home from "./components/Home";

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
    </div>
  );
};

export default App;
