import React, { useState } from "react";
import Tooltip from "./Tooltip";
import "./App.css";

const App = () => {
  const [pos, setPos] = useState("left");

  const positionChanger = () => {
    if (pos === "left") {
      setPos("top");
    } else if (pos === "top") {
      setPos("bottom");
    } else if (pos === "bottom") {
      setPos("right");
    } else {
      setPos("left");
    }
  };
  return (
    <div>
      {
        <p className="logo" onClick={positionChanger}>
          {pos}
        </p>
      }
      <Tooltip pos={pos} text="Thanks for hovering! I'm a tooltip ">
        Hover me over!
      </Tooltip>
    </div>
  );
};

export default App;
