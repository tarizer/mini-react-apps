import React, { useState } from "react";
import setInputValue from "../../utils/setInputValue";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const [setText, setNumber] = setInputValue(); // Set the state to the value of the input field using the given setState function

  return (
    <>
      <form>
        <div>
          <label htmlFor="input-name">Name: </label>
          <span>
            <input
              type="text"
              name="name"
              id="input-name"
              value={name}
              onChange={setText(setName)}
            />
          </span>
          <p>
            Value: {name} - Type: {typeof name}
          </p>
        </div>
        <div>
          <label htmlFor="input-age">Age: </label>
          <span>
            <input
              type="number"
              name="age"
              id="input-age"
              value={age}
              onChange={setNumber(setAge)}
            />
          </span>
          <p>
            Value: {age} - Type: {typeof age}
          </p>
        </div>
      </form>
    </>
  );
};

export default Form;
