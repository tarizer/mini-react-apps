import React, { useState, forwardRef } from "react";

const PersonForm = forwardRef(({ title }, ref) => {
  document.title = title;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <form>
        <p>
          <label htmlFor="firstname-input">Firstname: </label>
          <input
            type="text"
            name="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            ref={ref}
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
});

export default PersonForm;
