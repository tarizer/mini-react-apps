import React, { useRef, useEffect } from "react";

import PersonForm from "./PersonForm";

const RefHookForward = ({ title }) => {
  // document.title = title;

  const inputElement = useRef();

  useEffect(() => {
    inputElement.current && inputElement.current.focus();
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <PersonForm title={title} ref={inputElement} />
    </>
  );
};

export default RefHookForward;
