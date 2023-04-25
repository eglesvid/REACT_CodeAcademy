import { configureStore } from "@reduxjs/toolkit"; // su jo pagalba galim susikurti/eksportuoti store
import postsReducer from "./reducers/postsReducer";

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

export default store;
