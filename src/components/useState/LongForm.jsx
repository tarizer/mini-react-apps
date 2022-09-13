import React, { useState } from "react";

import setObject from "../../utils/setObjectValues"; // Using it once to demonstrate use

const LongForm = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.dir(form);
  };

  const setValue = {
    // If input field is a number cast the value to be a number (default: string)
    number: (value) => Number(value),
    text: (value) => value,
  };

  // Easy way to change a state object
  const setFormObject = ({ target: { name, type, value } }) =>
    setForm({
      ...form,
      [name]: setValue[type](value),
    });

  // Imported from setObjectValues
  // An abstract way to change a state object (by sending the state and the setState function as parameters)
  // Useful if we have multiple state objects
  // Using it once to demonstrate use
  // const setObject = (form, setForm) => ({
  //   target: { name, type, value }, // Event deconstruction
  // }) =>
  //   setForm({
  //     ...form,
  //     [name]: setValue[type](value),
  //   });

  return (
    <form>
      <div>
        <p>
          <label htmlFor="name-input">Name: </label>
          <input
            type="text"
            name="name"
            id="name-input"
            value={form.name}
            onChange={setObject(form, setForm)}
          />
          <span>
            {" "}
            <span role="img" aria-label="Square">
              &#11035;
            </span>{" "}
            Name: {form.name}
          </span>
        </p>
        <p>
          <label htmlFor="age-input">Age: </label>
          <input
            type="number"
            name="age"
            id="age-input"
            value={form.age}
            onChange={setFormObject}
          />
          <span>
            {" "}
            Age: {form.age} - Type: {typeof form.age}
          </span>
        </p>
        <p>
          <label htmlFor="email-input">Email: </label>
          <input
            type="text"
            name="email"
            id="email-input"
            value={form.email}
            onChange={setFormObject}
          />
          <span> Email: {form.email}</span>
        </p>
        <p>
          <label htmlFor="phone-input">Phone: </label>
          <input
            type="text"
            name="phone"
            id="phone-input"
            value={form.phone}
            onChange={setFormObject}
          />
          <span> Phone: {form.phone}</span>
        </p>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default LongForm;
