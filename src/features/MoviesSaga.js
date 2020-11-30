import {
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
  debounce,
  select,
} from "redux-saga/effects";
import {
  getPopularMovies,
  getGenres,
  getMovieDetails,
} from "features/getDataApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  setError,
  toggleFavoriteMovies,
  selectFavoriteMovie
} from "./moviesSlice";
import store from "store";
import { saveMovieInLocalStorage } from "./moviesLocalStorage";

function* fetchPopularMoviesHandler({ payload = 1 }) {
  try {
    yield delay(500);
    const movies = yield call(getPopularMovies, payload);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(setError());
  }
}
function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(fetchGenres(genres));
  } catch (error) {
    yield put(setError());
  }
}
function* fetchMovieDetailsHandler() {
  try {
    const movieId = store.getState().movies.movieId;
    const details = yield call(getMovieDetails, movieId);
    yield put(fetchMovieDetailsSuccess(details));
  } catch (error) {
    yield put(setError());
  }
}
function * saveMovieInLocalStorageHandler() {
  const favoriteMovie = yield select(selectFavoriteMovie);
  yield call(saveMovieInLocalStorage, favoriteMovie);
}
export function* watchFetchPopularMovies() {
  yield debounce(500, fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchPopularMovies.type, fetchGenresHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeEvery(toggleFavoriteMovies.type, saveMovieInLocalStorageHandler);
}
