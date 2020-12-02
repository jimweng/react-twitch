const INITIAL_STATE = {
  isSiginedIn: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, isSiginedIn: true };
    case "SIGN_OUT":
      return { ...state, isSiginedIn: false };
    default:
      return state;
  }
};
