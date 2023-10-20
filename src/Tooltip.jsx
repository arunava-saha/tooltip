import React, { Children, useEffect, useState } from "react";

const Tooltip = ({ text, pos, children }) => {
  const [tooltip, setTooltip] = useState(false);
  return (
    <>
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
