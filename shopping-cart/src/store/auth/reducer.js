const initialState = {
  me: null, // the logged-in user
  accessToken: null,
  redirect: false,
  errorMessage: null,
};

export default function authSliceReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case "LOGGED_IN": {
      return {
        ...state,
        me: payload.profile,
        accessToken: payload.token,
        redirect: true,
      };
    }
    case "ERROR_LOGGEDIN": {
      return {
        ...state,
        redirect: false,
        errorMessage: "Wrong Credentials",
      };
    }
    case "auth/logout": {
      return initialState;
    }
    default:
      return state;
  }
}
