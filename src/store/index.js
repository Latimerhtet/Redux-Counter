import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import authReducer from "./authReducer";
const store = configureStore({
  reducer: { counter: countReducer, auth: authReducer },
});

export default store;
