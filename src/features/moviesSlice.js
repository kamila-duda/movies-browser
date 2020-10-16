import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: `movies`,
  initialState: {
    configurationParameters: {},
    movies: {},
    genres: [],
  },
  reducers: {
    fetchData: () => { },
    setConfigurationParameters: (state, { payload: basicParameters }) => {
      state.configurationParameters = basicParameters;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setMovies: (state, { payload: popularMovies }) => {
      state.movies = popularMovies;
    },
  }
});

export const {
  fetchData,
  setConfigurationParameters,
  setGenres,
  setMovies,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectResults = state => selectMovies(state).movies.results;
export const selectGenres = state => selectMovies(state).genres.genres;
export const selectConfigurationParameters = state => selectMovies(state).configurationParameters.images;

export default moviesSlice.reducer;

