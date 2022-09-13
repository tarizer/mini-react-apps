import React from "react";

import { firstContext, secondContext } from "./contextSample";
import ContextApp from "./ContextApp";

const ContextAppProvider = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        <firstContext.Provider value={{ data: "First Context" }}>
          <secondContext.Provider value={{ data: "Second Context" }}>
            <ContextApp />
          </secondContext.Provider>
        </firstContext.Provider>
      </div>
    </>
  );
};

export default ContextAppProvider;
