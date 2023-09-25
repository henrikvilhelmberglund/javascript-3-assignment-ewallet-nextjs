import { configureStore } from "@reduxjs/toolkit";
import ewalletSlice from "./ewalletSlice";

// import slices here

const store = configureStore({
  reducer: {
    ewallet: ewalletSlice
    // reducer here
  },
});

export default store;
