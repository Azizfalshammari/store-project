//store.jsx
import { configureStore } from "@reduxjs/toolkit";
import LogInSlice from "../Futers/LogInSlice";
export const store = configureStore({
  reducer: {
    login: LogInSlice,
  },
});
