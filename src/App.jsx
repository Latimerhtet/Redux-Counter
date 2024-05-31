import React from "react";
import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import { useSelector } from "react-redux";
const App = () => {
  const login = useSelector((state) => state.auth.isLogin);
  return (
    <div>
      <Navbar />
      {!login && <Welcome />}
      {login && <Counter />}
    </div>
  );
};

export default App;
