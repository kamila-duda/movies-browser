import {
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
  debounce,
} from "redux-saga/effects";
import {
  getPopularMovies,
  getGenres,
  getMovieDetails,
} from "features/getDataApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} from "./moviesSlice";
import store from "store";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    yield delay(500);
    const movies = yield call(getPopularMovies, payload);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
    yield call(alert, "Upss, coś poszło nie tak");
  }
}
function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(fetchGenres(genres));
  } catch (error) {
    yield call(alert, "Upss, nie pobrano gatunków");
  }
}
function* fetchMovieDetailsHandler() {
  try {
    const movieId = store.getState().movies.movieId;
    const details = yield call(getMovieDetails, movieId);
    yield put(fetchMovieDetailsSuccess(details));
  } catch (error) {
    yield put(fetchMovieDetailsError());
    yield call(alert, error);
  }
}
export function* watchFetchPopularMovies() {
  yield debounce(500, fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchPopularMovies.type, fetchGenresHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
