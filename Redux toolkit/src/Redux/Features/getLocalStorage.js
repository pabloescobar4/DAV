import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const local = JSON.parse(localStorage.getItem("posts"));

// export const getLocalStorage = createAsyncThunk("local/getLocalStorage",  async() => {
//   return fetch('https://jsonplaceholder.typicode.com/posts')           //api for the get request
//   .then(response => response.json())

// });

const localSlice = createSlice({
  name: "local",
  initialState: {
    local: local,
    loading: false,
  },
  extraReducers: {},
});

export const localReducer = localSlice.reducer;
