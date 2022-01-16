export const inputHandler = (event, setState) => {
  setState((prev) => {
    return { ...prev, [event.target.id]: event.target.value };
  });
};
