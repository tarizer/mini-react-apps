export const resultReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "substract":
      return state - action.payload;
    case "multiply":
      return state * action.payload;
    case "divide":
      return state / action.payload;

    default:
      return state;
  }
};

export const historyReducer = (state, action) => {
  switch (action.type) {
    case "add":
    case "substract":
    case "multiply":
    case "divide":
      return [...state, { op: action.type, value: action.payload }];

    default:
      return state;
  }
};

export const calcReducerMulti = (state, action) => {
  return {
    ...state,
    result: resultReducer(state.result, action),
    history: historyReducer(state.history, action),
  };
};
