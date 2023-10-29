import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/index.js";
import authReducer from "./auth/index.js";
import modalreducer from "./modal/index.js";

const store = configureStore({
  reducer: {
    basket: basketReducer,
    auth: authReducer,
    modal: modalreducer,
  },
});

export default store;
