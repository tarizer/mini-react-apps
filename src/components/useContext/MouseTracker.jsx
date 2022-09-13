import React, { useContext } from "react";

import { mouseContext } from "./contextSample";

const MouseTracker = () => {
  const position = useContext(mouseContext);
  console.log(position);
  return (
    <div>
      <p>Hello!</p>
      <p>
        The current mouse position is {position.x}, {position.y}
      </p>
    </div>
  );
};

export default MouseTracker;
