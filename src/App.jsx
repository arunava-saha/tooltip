import React from "react";
import Tooltip from "./Tooltip";
import "./App.css";

const App = () => {
  return (
    <div>
      <Tooltip position="left" text="Thanks for hovering! I'm a tooltip ">
        Hover me over!
      </Tooltip>
    </div>
  );
};

export default App;
