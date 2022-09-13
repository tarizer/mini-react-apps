import React, { useReducer } from "react";

const counterReducer = (state, action) => {
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

const createDecrementBy5Action = (payload) => ({ type: "-5", payload });
const createDecrementAction = (payload) => ({ type: "decrement", payload });
const createIncrementAction = (payload) => ({ type: "increment", payload });
const createIncrementBy5Action = (payload) => ({ type: "+5", payload });

// bindActioncreators takes an array of actionCreators and pass them one by one to dispatch
// (provided by default in redux but not in useReducer)
// actioncreator is just a function that returns an action
// An action is just an object that flows through our different reducers
const bindActioncreators = (actioncreators, dispatch) =>
  actioncreators.map((actioncreator) => (...params) =>
    dispatch(actioncreator(...params))
  );

const useCounter = (initialState = 0) => {
  const [counter, dispatch] = useReducer(counterReducer, initialState);

  return [
    counter,
    ...bindActioncreators(
      [
        createDecrementBy5Action,
        createDecrementAction,
        createIncrementAction,
        createIncrementBy5Action,
      ],
      dispatch
    ),
  ];
};

const CounterCustomHook = ({ title }) => {
  document.querySelector("title").innerText = title; // Shorter: document.title = title;

  const [
    counter,
    decrementBy5Dispatch,
    decrementDispatch,
    incrementDispatch,
    incrementBy5Dispatch,
  ] = useCounter();

  return (
    <>
      <h3>{title}</h3>
      <p>Counter: {counter}</p>
      <button type="button" onClick={decrementBy5Dispatch}>
        -5
      </button>
      <button type="button" onClick={decrementDispatch}>
        Decrement
      </button>
      <button type="button" onClick={incrementDispatch}>
        Increment
      </button>
      <button type="button" onClick={incrementBy5Dispatch}>
        +5
      </button>
    </>
  );
};

export default CounterCustomHook;
