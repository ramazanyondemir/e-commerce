import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _login: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { _login } = authSlice.actions;

export default authSlice.reducer;
