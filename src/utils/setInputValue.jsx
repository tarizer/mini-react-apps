const setInputValue = () => {
  // Given a setState function -> set the input text value
  const setTextValue = (setStateFunction) => (e) =>
    setStateFunction(e.target.value);

  // Given a setState function -> set the input number value
  const setNumberValue = (setStateFunction) => (e) =>
    setStateFunction(Number(e.target.value));

  return [setTextValue, setNumberValue];
};

export default setInputValue;
