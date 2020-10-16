import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies, getGenres } from "features/getDataApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
} from "./moviesSlice";

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
function* fetchGenresHandler() {
  try {
    const genres = yield call(getGenres);
    yield put(fetchGenres(genres));
  } catch (error) {
    yield call(alert, "Upss, nie pobrano gatunków");
  }
}
export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchPopularMovies.type, fetchGenresHandler);
}
