export const selectProfile = (state) => {
  console.log(" state", state.auth.me);
  return state.auth.me;
};

export const selectLoggedInError = (state) => {
  console.log(" state", state.auth.redirect);
  return state.auth.redirect;
};

export const selectErrorMessage = (state) => {
  console.log(" state", state.auth.errorMessage);
  return state.auth.errorMessage;
};
