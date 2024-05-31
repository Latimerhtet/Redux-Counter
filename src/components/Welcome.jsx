import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";
const Welcome = () => {
  const dispatch = useDispatch();
  const login = () => {
    dispatch(authActions.login());
  };
  return (
    <div className="welcome">
      <h2>Welcome from Our App</h2>
      <p>Plese Login first to get Started!</p>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Welcome;
