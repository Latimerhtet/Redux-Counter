import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("getTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
});

const initialTodoState = {
  isLoading: false,
  todo: [],
  isError: false,
};

const todoReducer = createSlice({
  name: "todos",
  initialState: initialTodoState,
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default todoReducer.reducer;
