import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";
import authReducer from "./authReducer";
import todoReducer from "./reducers/todo";
const store = configureStore({
  reducer: { counter: countReducer, auth: authReducer, todo: todoReducer },
});

export default store;
