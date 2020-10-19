import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
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
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.loading = false;
    },
    fetchPopularMoviesError: (state) => {
      state.movies = [];
      state.loading = false;
    },
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres.genres;
    },
    increaseCurrentPage: (state) => {
      state.currentPage = ++state.currentPage;
    },
    decreaseCurrentPage: (state) => {
      state.currentPage = --state.currentPage;
    },
    setCurrentPageFirst: (state) => {
      state.currentPage = 1;
    },
    setCurrentPageLast: (state, { payload: lastPage }) => {
      state.currentPage = lastPage;
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
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies.results;
export const selectTotalPages = (state) => selectMoviesState(state).movies.total_pages;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectCast = (state) => selectMoviesState(state).cast;
export const selectCrew = (state) => selectMoviesState(state).crew;
export const selectCurrentPage = (state) => selectMoviesState(state).currentPage;

export default moviesSlice.reducer;
