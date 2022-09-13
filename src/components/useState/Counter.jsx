import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);

  return (
    <>
      <p>Counter: {counter}</p>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </>
  );
};

export default Counter;
