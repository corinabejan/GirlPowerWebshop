import axios from "axios";
import { API_URL } from "../../config";

export function userLoggedIn(token, profile) {
  return {
    type: "LOGGED_IN",
    payload: {
      token: token,
      profile: profile,
    },
  };
}

export function login(email, password) {
  console.log("email and password", email, password);
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: email,
        password: password,
      });
      console.log("response", response);
      if (response) {
        const userProfile = await axios.get(
          `${API_URL}/customers/email/${email}`,
          {
            headers: { Authorization: `Bearer ${response.data.token}` },
          }
        );
        console.log("userProfile", userProfile.data);
        dispatch(userLoggedIn(response.data.token, userProfile.data));
        localStorage.setItem("token", response.data.token);
      }
    } catch (e) {
      console.log(e.message);
      dispatch({
        type: "ERROR_LOGGEDIN",
      });
    }
  };
}

export async function bootstrapLoginState(dispatch, getState) {
  const token = localStorage.getItem("token");
  console.log("token :", token);
  if (token) {
    const userProfile = await axios.get(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("userProfile", userProfile.data);
    dispatch(userLoggedIn(token, userProfile.data));
  }
}

export function logout(dispatch, getState) {
  dispatch({ type: "auth/logout" });
  localStorage.removeItem("token");
}
