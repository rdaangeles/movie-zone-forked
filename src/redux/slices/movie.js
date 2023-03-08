import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/movieApi";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (movieTitle) => {
    const response = await movieApi.get(
      `?s=${movieTitle}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
    );

    return response.data;
  }
);

export const getMovieDetails = createAsyncThunk(
  "movies/getMovieDetails",
  async (id) => {
    const response = await movieApi.get(
      `?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&i=${id}&Plot=full`
    );

    return response.data;
  }
);

const initialState = {
  movies: {},
  featuredMovie: {},
  movieDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    featuredMovie: (state, { payload }) => {
      state.featuredMovie = payload;
    },
    destroySelectedMovie: (state) => {
      state.movieDetails = {};
    },
  },
  extraReducers: {
    [getMovies.pending]: () => {
      console.log("Loading...");
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        movies: payload,
      };
    },
    [getMovies.rejected]: () => {
      console.log("Rejected...");
    },
    [getMovieDetails.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        movieDetails: payload,
      };
    },
    [getMovieDetails.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { featuredMovie, destroySelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getFeaturedMovie = (state) => state.movies.featuredMovie;
export const getSelectedMovieDetails = (state) => state.movies.movieDetails;
export default movieSlice.reducer;
