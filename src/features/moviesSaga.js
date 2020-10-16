import { takeEvery, call, put, delay, select } from "redux-saga/effects";
import { fetchPopularMovies, setMovies, selectMovies } from "features/moviesSlice";
import { getPopularMovies } from "features/MovieListPage/getPopularMovies";

function* fetchPopularMoviesHandler() {
  try {
    console.log("Cały czas pracuję?")
    const popularMovies = yield call(getPopularMovies);
    yield put(setMovies(popularMovies));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* watchMoviesAction() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);

}