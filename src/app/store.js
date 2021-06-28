import { configureStore } from "@reduxjs/toolkit";
import acctressSlice from "./acctressSlice";

export const store = configureStore({
  reducer: {
    acctress: acctressSlice,
  },
});
