import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { produce } from "immer";

export const fetchData = createAsyncThunk("data/posts", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
});

export const addPosts = createAsyncThunk(
  "data/posts/addPosts",
  async (body) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      body
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addUser: (state, action) =>
      produce(state, (draft) => {
        draft.users.push(action.payload);
      }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addUser } = postsSlice.actions;
export default postsSlice.reducer;
