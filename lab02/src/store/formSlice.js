import { createSlice } from "@reduxjs/toolkit";

// state
const initialState = {
  name: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  // Reducer = mutate state
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

// Actions = Methods
export const { setName } = formSlice.actions;
