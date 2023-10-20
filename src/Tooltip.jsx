import React, { Children, useEffect, useState } from "react";

const Tooltip = ({ text, position, children }) => {
  const [tooltip, setTooltip] = useState(false);
  const [pos, setPos] = useState(position);

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
    <>
      {
        <p className="logo" onClick={positionChanger}>
          positioned: {pos}
        </p>
      }
      <div
        className="tool"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
      >
        {children}
        {tooltip && <span className={`tooltip ${pos}`}>{text}</span>}
        {tooltip && <span className={` ${pos} t-${pos} t-arrow`}></span>}
      </div>
    </>
  );
};

export default Tooltip;
