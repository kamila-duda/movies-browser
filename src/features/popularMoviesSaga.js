import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularMovies, getGenres, getMovieCredits } from "features/getDataApi";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchMovieCredits,
} from "./moviesSlice";

function* fetchPopularMoviesHandler({ payload }) {
  try {
    yield delay(500);
    const movies = yield call(getPopularMovies, payload.payload);
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
};
function* fetchMovieCreditsHandler({ payload: movieId }) {
  try {
    const credits = yield call(getMovieCredits, movieId);
    yield put(fetchMovieCredits(credits))
  } catch (error) {
    yield call(alert, "Upss, nie można załadować widoku");
  }
}
export function* watchFetchPopularMovies() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchPopularMovies.type, fetchGenresHandler);
  yield takeEvery(fetchMovieCredits.type, fetchMovieCreditsHandler);
}
