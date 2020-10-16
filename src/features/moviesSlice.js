import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: `movies`,
  initialState: {
    movies: {},
  },
  reducers: {
    fetchPopularMovies: () => { },
    setMovies: (state, { payload: popularMovies }) => {
      state.movies = popularMovies;
    },
  }
});

export const {
  fetchPopularMovies,
  setMovies
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectResults = state => selectMovies(state).movies.results;

export default moviesSlice.reducer;

