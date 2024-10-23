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

export const deletePosts = createAsyncThunk(
  "data/posts/deletePost",
  async (id) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.data;
  }
);

export const editPosts = createAsyncThunk(
  "data/posts/editPost",
  async (params) => {
    console.log(params, "params");
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) =>
      produce(state, (draft) => {
        draft.Posts.push(action.payload);
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

export const { addPost, deletePost, editPost } = postsSlice.actions;
export default postsSlice.reducer;
