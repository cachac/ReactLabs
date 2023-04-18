import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./formSlice";

import { postSlice } from "./postSlice";

export const store = configureStore({
  reducer: {
    // post: postSlice.reducer
    [formSlice.name]: formSlice.reducer,

    [postSlice.name]: postSlice.reducer,
  },
});
