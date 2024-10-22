import { createSlice } from "@reduxjs/toolkit";
import { genres } from "./../genre";
import { getMoviesFromLocalStorage } from "./moviesLocalStorage";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
    movieId: null,
    favoriteMovies: getMoviesFromLocalStorage(),
    movieProduction: "",
    genres: genres,
    cast: [],
    crew: [],
    loading: true,
    isError: false,
  },
  reducers: {
    fetchPopularMovies: (state) => {
      state.movies = [];
      state.loading = true;
      state.isError = false;
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.loading = false;
      state.isError = false;
      state.results = movies.total_results;
    },
    fetchGenres: (state, { payload: genres }) => {
      state.genres = genres.genres;
    },
    fetchMovieDetails: (state, { payload: movieId }) => {
      state.movieId = movieId;
      state.loading = true;
    },
    fetchMovieDetailsSuccess: (state, { payload: details }) => {
      state.loading = false;
      state.movie = details;
      state.cast = details.credits.cast;
      if (details.production_countries.length > 0) {
        state.movieProduction = details.production_countries;
      } else {
        state.movieProduction = [{ name: "brak danych" }];
      }
      state.crew = details.credits.crew;
    },
    setError: (state) => {
      state.isError = true;
      state.loading = false;
    },
    toggleFavoriteMovies: (state, { payload: movie }) => {
      const index = state.favoriteMovies.findIndex(
        (fav) => fav.id === movie.id
      );
      if (index > -1) {
        state.favoriteMovies.splice(index, 1);
      } else {
        state.favoriteMovies.push(movie);
      }
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchGenres,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
  setCurrentPage,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  setError,
  toggleFavoriteMovies,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies.results;
export const selectResults = (state) => selectMoviesState(state).results;
export const selectTotalPages = (state) =>
  selectMoviesState(state).movies.total_pages;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectIsError = (state) => selectMoviesState(state).isError;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectMovieId = (state) => selectMoviesState(state).movieId;
export const selectMovieProduction = (state) =>
  selectMoviesState(state).movieProduction;
export const selectCast = (state) => selectMoviesState(state).cast;
export const selectCrew = (state) => selectMoviesState(state).crew;
export const selectFavoriteMovie = (state) =>
  selectMoviesState(state).favoriteMovies;

export default moviesSlice.reducer;
