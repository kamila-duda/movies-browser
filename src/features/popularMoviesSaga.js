import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
  getPopularMovies,
  getGenres,
  getMovieDetails,
  getConfigurationData,
} from "features/getDataApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  setConfigurations,
} from "./moviesSlice";
import store from "store";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(500);
    const movies = yield call(getPopularMovies);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
    yield call(alert, "Upss, coś poszło nie tak");
  }
}
function* fetchConfigurationsFile() {
  try {
    const configurationsFile = yield call(getConfigurationData);
    yield put(setConfigurations(configurationsFile));
  } catch (error) {
    yield call(alert, "Upss, nie pobrano gatunków");
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
    console.log(details);
    yield put(fetchMovieDetailsSuccess(details));
  } catch (error) {
    yield put(fetchMovieDetailsError());
    yield call(alert, error);
  }
}
export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchPopularMovies.type, fetchConfigurationsFile);
  yield takeEvery(fetchPopularMovies.type, fetchGenresHandler);
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
