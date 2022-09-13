export const calcReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        result: state.result + action.payload,
        history: [...state.history, { op: action.type, value: action.payload }],
      };
    case "substract":
      return {
        ...state,
        result: state.result - action.payload,
        history: [...state.history, { op: action.type, value: action.payload }],
      };
    case "multiply":
      return {
        ...state,
        result: state.result * action.payload,
        history: [...state.history, { op: action.type, value: action.payload }],
      };
    case "divide":
      return {
        ...state,
        result: state.result / action.payload,
        history: [...state.history, { op: action.type, value: action.payload }],
      };

    default:
      return state;
  }
};
