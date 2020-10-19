import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
    configurations: {},
    genres: [28],
    cast: [],
    crew: [],
    loading: true,
    currentPage: 1,
  },
  reducers: {
    fetchPopularMovies: (state) => {
      state.movies = [];
      state.loading = true;
    },
    setConfigurations: (state, { payload: configurationsFile }) => {
      state.configurations = configurationsFile;
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.loading = false;
    },
    fetchPopularMoviesError: (state) => {
      state.movies = [];
      state.loading = false;
    },
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres.genres;
    },
    setCurrentPage: (state, { payload: movies }) => {
      state.currentPage = movies.page;
    },
    fetchMovie: (state) => {
      state.loading = true;
    },
    fetchMovieSuccess: (state, { payload: movie }) => {
      state.movie = movie;
      state.loading = false;
    },
    fetchMovieError: (state) => {
      state.loading = false;
    },
    fetchMovieCredits: (state) => {
      state.loading = true;
    },
    fetchMovieCreditsSuccess: (state, { payload: credicts }) => {
      state.cast = credicts.cast;
      state.crew = credicts.crew;
    },
    fetchMovieCreditsError: (state) => {
      state.loading = false;
    }
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  setConfigurations,
  setCurrentPage,
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectConfigurations = (state) => selectMoviesState(state).configurations;
export const selectImages = (state) => selectConfigurations(state).images;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectCast = (state) => selectMoviesState(state).cast;
export const selectCrew = (state) => selectMoviesState(state).crew;
export const selectCurrentPage = (state) => selectMoviesState(state).currentPage;

export default moviesSlice.reducer;
