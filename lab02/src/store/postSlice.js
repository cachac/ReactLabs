import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../service/apiClient";

const initialState = {
  post: {
    name: "",
  },
  list: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const readAll = createAsyncThunk(
  "post/readAll",
  async (input, thunkAPI) => {
    try {
      // const { list } = thunkAPI.getState().post;
      // if (list.length) {
      //   console.log("get list from cache ⏩");

      //   return list;
      // }

      console.log("get list from db 😰");
      const resp = await apiClient.get("/post/readall");

      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.toString());
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // setPost: (state, action) => {
    //   state.post = action.payload;
    // },
  },
  extraReducers: {
    [readAll.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [readAll.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
      state.isError = false;
    },
    [readAll.rejected]: (state, action) => showError(state, action),
  },
});

const showError = (state, action) => {
  state.isError = true;
  state.isLoading = false;
  state.errorMessage = action.payload;
};

export const { setNum } = postSlice.actions;
