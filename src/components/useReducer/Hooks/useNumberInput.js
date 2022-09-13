import { useState } from "react";

// Input type number returns a string by default, we need to return a number
export const useNumberInput = (initialState = 0) => {
  const [value, setValue] = useState(initialState);
  return [value, (e) => setValue(Number(e.target.value))];
};
