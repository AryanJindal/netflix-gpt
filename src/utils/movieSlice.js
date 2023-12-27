import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies:null,
    topRated:null,
    upcoming:null
  },
  reducers: {
    addNowPlayinMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies:(state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies:(state, action) => {
      state.topRated = action.payload;
    },
    addUpcomingMovies:(state, action) => {
      state.upcoming = action.payload;
    },
  },
});

export const { addPopularMovies, addNowPlayinMovies , addTrailerVideo, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
