// bindActioncreators takes an array of actionCreators and pass them one by one to dispatch
// (provided by default in redux but not in useReducer)
// actioncreator is just a function that returns an action
// An action is just an object that flows through our different reducers

export const bindActioncreators = (actioncreators, dispatch) =>
  actioncreators.map((actioncreator) => (...params) =>
    dispatch(actioncreator(...params))
  );
