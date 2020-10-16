import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    movie: {},
    movieId: null,
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
    fetchMovie: (state, { payload: movie }) => {
      state.movie = movie;
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
    },
    setMovieId: (state, {payload: id}) => {
      state.movieId = id;
    }
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchGenres,
  setCurrentPage,
  fetchMovie,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
  setMovieId,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectMovieId = (state) => selectMoviesState(state).movieId;
export const selectCast = (state) => selectMoviesState(state).cast;
export const selectCrew = (state) => selectMoviesState(state).crew;
export const selectCurrentPage=(state)=>selectMoviesState(state).currentPage;
export const getMovieById = (state, movieId) =>
  selectMovies(state).find(({ id }) => id === movieId);

export default moviesSlice.reducer;
