const setValue = {
  // If input field is a number cast the value to be a number (default: string)
  number: (value) => Number(value),
  text: (value) => value,
};

// An abstract way to change a state object (by sending the state and the setState function as parameters)
// Only useful if I have multiple state objects
const setObject = (form, setForm) => ({
  target: { name, type, value }, // Event deconstruction
}) =>
  setForm({
    ...form,
    [name]: setValue[type](value),
  });

export default setObject;
