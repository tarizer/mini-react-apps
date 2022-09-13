import React, { useState } from "react";

import { mouseContext } from "./contextSample";
import MouseTracker from "./MouseTracker";

// Using dynamic context

const ContextMouseProvider = ({ title }) => {
  document.title = title;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({

      ...position,
        x: event.clientX,
        y: event.clientY,
    })
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      <h1>{title}</h1>
      <h2>Move the mouse around!</h2>
      <mouseContext.Provider value={position}>
        <MouseTracker />
      </mouseContext.Provider>
    </div>
  );
};

export default ContextMouseProvider;
