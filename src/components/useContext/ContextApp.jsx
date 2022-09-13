import React, { useContext } from "react";

import { firstContext, secondContext } from "./contextSample";

const ContextAppHooks = () => {
  const firstContextData = useContext(firstContext);
  const secondContextData = useContext(secondContext);
  return (
    <div>
      <p>First Context : {firstContextData.data}</p>
      <p>Second Context : {secondContextData.data}</p>
    </div>
  );
};

export default ContextAppHooks;
