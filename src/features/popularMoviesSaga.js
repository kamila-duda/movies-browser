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
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  setError
} from "./moviesSlice";
import store from "store";

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
export function* watchFetchPopularMovies() {
  yield debounce(500, fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchPopularMovies.type, fetchGenresHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
