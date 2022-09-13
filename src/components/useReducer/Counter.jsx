import React, { useReducer } from "react";

const Counter = ({ title }) => {
  document.querySelector("title").innerText =
    title.slice(0, 1) + title.slice(2);

  const reducer = (state, action) => {
    switch (action.type) {
      case "-5":
        return state - 5;
      case "decrement":
        return state - 1;
      case "increment":
        return state + 1;
      case "+5":
        return state + 5;

      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h3>{title}</h3>
      <p>Counter: {counter}</p>
      <button type="button" onClick={() => dispatch({ type: "-5" })}>
        -5
      </button>
      <button type="button" onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch({ type: "+5" })}>
        +5
      </button>
    </>
  );
};

export default Counter;
