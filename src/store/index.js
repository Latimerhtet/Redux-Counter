import { legacy_createStore as createStore } from "redux";

const reducer = (state = { count: 0, amount: 0 }, action) => {
  if (action.type == "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type == "decrement") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type == "increaseByAmount") {
    return {
      amount: action.amount,
      count: state.count + action.amount,
    };
  } else if (action.type == "clear") {
    return {
      amount: 0,
      count: 0,
    };
  }
  return state;
};
const store = createStore(reducer);

export default store;
