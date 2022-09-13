import React, { useState, useRef, useEffect } from "react";

const RefHook = ({ title }) => {
  document.title = title;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const inputElement = useRef();

  useEffect(() => {
    inputElement.current && inputElement.current.focus();
  }, []);

  return (
    <>
      <h2>{title}</h2>
      <form>
        <p>
          <label htmlFor="firstname-input">Firstname: </label>
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            ref={inputElement}
          />
          <span> - {firstName}</span>
        </p>
        <p>
          <label htmlFor="lastname-input">Lastname: </label>
          <input
            type="text"
            name="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <span> - {lastName}</span>
        </p>
      </form>
    </>
  );
};

export default RefHook;
