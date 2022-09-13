import React from "react";
import { useCalc } from "./Hooks/useCalc";
import { useNumberInput } from "./Hooks/useNumberInput";

const Calculator = ({ title }) => {
  //const [state, dispatch] = useReducer(calcReducer, {});
  const [result, history, add, substract, multiply, divide] = useCalc();
  const [operand, setOperand] = useNumberInput();

  document.title = title;

  return (
    <>
      <h1>{title}</h1>
      <h2>Result: {result}</h2>
      <div>
        <label htmlFor="operand-input">Input: </label>
        <input
          type="number"
          id="operand-input"
          value={operand}
          onChange={setOperand}
        />
      </div>
      <p>
        <button type="button" onClick={() => add(operand)}>
          +
        </button>
        <button type="button" onClick={() => substract(operand)}>
          -
        </button>
        <button type="button" onClick={() => multiply(operand)}>
          *
        </button>
        <button type="button" onClick={() => divide(operand)}>
          /
        </button>
      </p>

      <h2>History</h2>
      <ul>
        {/* We are modifying the history array only by pushing to it new values, we can safely use index */}
        {history.length === 0
          ? "No history yet!"
          : history.map((operation, index) => (
              <li key={index}>
                op:{operation.op}, value: {operation.value}
              </li>
            ))}
      </ul>
    </>
  );
};

export default Calculator;
