import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authReducer";
const Navbar = () => {
  const login = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <nav>
        <h2>Redux Counter</h2>
        <div className="options">
          {login && (
            <>
              <button>Your records</button>
              <button onClick={logout}>Logout</button>
            </>
          )}
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
