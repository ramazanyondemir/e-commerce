import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {
    name: "",
    surname: "",
    password: "",
    email: "",
    phone: "",
    login: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _setName: (state, action) => {
      state.user.name = action.payload;
    },
    _setPassword: (state, action) => {
      state.user.password = action.payload;
    },
    _setSurname: (state, action) => {
      state.user.surname = action.payload;
    },
    _setEmail: (state, action) => {
      state.user.email = action.payload;
    },
    _setPhone: (state, action) => {
      state.user.phone = action.payload;
    },
    _login: (state, action) => {
      state.user.login = action.payload;
    },
  },
});

export const {
  _login,
  _setPassword,
  _setName,
  _setSurname,
  _setEmail,
  _setPhone,
} = authSlice.actions;

export default authSlice.reducer;
