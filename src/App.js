import React from "react";
import "./App.css";
import ClickOutsideWrapper from "./lib/index";

function App() {
  return (
    <div className="app">
      <ClickOutsideWrapper onClickOutside={() => alert("You clicked outside!")}>
        <div className="item">
          <p>Click outside me!</p>
        </div>
      </ClickOutsideWrapper>
    </div>
  );
}

export default App;
