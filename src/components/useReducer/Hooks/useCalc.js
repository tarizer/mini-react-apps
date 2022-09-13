import { useReducer } from "react";

// import { calcReducer } from "../calcReducer";
import { calcReducerMulti } from "../calcReducerMulti"; // Using multiple reducers
import { bindActioncreators } from "../../../utils/bindActionscreators";
import {
  createAddAction,
  createSubstractAction,
  createMultiplyAction,
  createDivideAction,
} from "../calcActions";

export const useCalc = (initialState = { result: 0, history: [] }) => {
  const [state, dispatch] = useReducer(calcReducerMulti, initialState);

  return [
    state.result,
    state.history,
    ...bindActioncreators(
      [
        createAddAction,
        createSubstractAction,
        createMultiplyAction,
        createDivideAction,
      ],
      dispatch
    ),
  ];
};
