import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
    movieId: null,
    movieProduction: "",
    genres: [],
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
    fetchMovieDetails: (state, { payload: movie }) => {
      state.movieId = movie.id;
      state.movie = movie;
      state.cast = [];
      state.crew = [];
      state.movieProduction = "";
      state.loading = true;
    },
    fetchMovieDetailsSuccess: (state, { payload: details }) => {
      state.loading = false;
      state.cast = details.credits.cast;
      if (details.production_countries.length > 0) {
        state.movieProduction = details.production_countries;
      } else {
        state.movieProduction = [{ name: "brak danych" }];
      }
      state.crew = details.credits.crew;
    },
    fetchMovieDetailsError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  setCurrentPage,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectMovieId = (state) => selectMoviesState(state).movieId;
export const selectMovieProduction = (state) =>
  selectMoviesState(state).movieProduction;
export const selectCast = (state) => selectMoviesState(state).cast;
export const selectCrew = (state) => selectMoviesState(state).crew;
export const selectCurrentPage = (state) =>
  selectMoviesState(state).currentPage;
export const getMovieById = (state, movieId) =>
  selectMovies(state).find(({ id }) => id === movieId);

export default moviesSlice.reducer;
