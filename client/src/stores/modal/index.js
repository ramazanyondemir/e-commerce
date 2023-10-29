import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modals: [],
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    _append: (state, action) => {
      state.modals.push(action.payload);
    },
    _destroy: (state) => {
      state.modals.pop();
    },
    _destroyAll: (state) => {
      state.modals = [];
    },
  },
});

export const { _append, _destroy, _destroyAll } = modalSlice.actions;

export default modalSlice.reducer;
