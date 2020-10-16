import { takeEvery, call, put, delay } from "redux-saga/effects";
import {
  getPopularMovies,
  getGenres,
  getMovieCredits,
} from "features/getDataApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchMovieCredits,
  fetchMovieCreditsSuccess,
  fetchMovieCreditsError,
  getMovieById,
  selectMovieId,
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
function* fetchMovieCreditsHandler() {
  try {
    const credits = yield call(getMovieCredits(selectMovieId()));
    yield put(fetchMovieCreditsSuccess(credits));
  } catch (error) {
    yield put(fetchMovieCreditsError());
    yield call(alert, "Upss, nie można załadować widoku");
  }
}
export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchPopularMovies.type, fetchGenresHandler);
  yield takeEvery(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
