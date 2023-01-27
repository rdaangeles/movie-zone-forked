import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movie";

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
