import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
  featuredMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },

    featuredMovie: (state, { payload }) => {
      state.featuredMovie = payload;
    },
  },
});

export const { addMovies, featuredMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getFeaturedMovie = (state) => state.movies.featuredMovie;
export default movieSlice.reducer;
