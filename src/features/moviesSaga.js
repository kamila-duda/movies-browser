import { takeEvery, call, put, delay } from "redux-saga/effects";
import { fetchData, setConfigurationParameters, setGenres, setMovies, setLoading, setError } from "features/moviesSlice";
import { getDataApi } from "./getDataApi";

function* fetchDataMoviesHandler() {
  try {
    yield put(setLoading(true));
    yield delay(1500);
    const configurations = yield call(getDataApi, "configurationData");
    yield put(setConfigurationParameters(configurations));
    const genresList = yield call(getDataApi, "genresData");
    yield put(setGenres(genresList));
    const popularMovies = yield call(getDataApi, "popularMoviesData");
    yield put(setMovies(popularMovies));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  };
  yield put(setLoading(false));
}

export function* watchFetchingAction() {
  yield takeEvery(fetchData.type, fetchDataMoviesHandler);

};