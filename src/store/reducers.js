let initialState = { foo: 'bar' };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return { foo: Math.random() };
    case 'RESET':
      return { currentNumber: 3 };
    default:
      return state;
  }
};
