import { configureStore } from "@reduxjs/toolkit";
import { localReducer } from "./Features/getLocalStorage";
import { postReducer } from "./Features/PostSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    local: localReducer,
  },
});
