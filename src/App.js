import React from "react";

const App = () => {
  return (
    <div className="main-container" onClick={() => {
      const ref = document.querySelector('.nav')
      if(ref.classList.contains('show-sidebar')) {
        ref.classList.remove('show-sidebar')
      }
    }}>
      <div className="home">
        <h1 id="top">Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default App;
