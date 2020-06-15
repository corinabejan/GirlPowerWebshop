import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/action";
import { useHistory } from "react-router-dom";
import {
  selectLoggedInError,
  selectErrorMessage,
} from "../store/auth/selector";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(selectLoggedInError);
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();
  const history = useHistory();
  console.log("error :", error);
  if (error) {
    history.push("/home");
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
        {errorMessage ? <em>{errorMessage}</em> : null}
      </form>
    </div>
  );
}
