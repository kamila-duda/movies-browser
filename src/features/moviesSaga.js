import { takeEvery, call, put } from "redux-saga/effects";
import { fetchData, setConfigurationParameters, setGenres, setMovies } from "features/moviesSlice";
import { getDataApi } from "./getDataApi";

function* fetchDataMoviesHandler() {
  try {
    const configurations = yield call(getDataApi, "configurationData")
    yield put(setConfigurationParameters(configurations));
    const genresList = yield call(getDataApi, "genresData")
    yield put(setGenres(genresList));
    const popularMovies = yield call(getDataApi, "popularMoviesData")
    yield put(setMovies(popularMovies));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* watchFetchingAction() {
  yield takeEvery(fetchData.type, fetchDataMoviesHandler);

}