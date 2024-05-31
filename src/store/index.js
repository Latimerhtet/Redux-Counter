import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, amount: 0, isShow: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByAmount(state, action) {
      state.counter = state.counter + action.payload;
    },
    clear(state) {
      (state.counter = 0), (state.amount = 0);
    },
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });
export const counterAcions = counterSlice.actions;
export default store;
