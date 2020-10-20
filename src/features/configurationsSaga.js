import { call, put, takeEvery } from "redux-saga/effects";
import { getConfigurationData } from "features/getDataApi";
import { setConfigurations } from "./configurationsSlice";
import { fetchPopularMovies } from "./moviesSlice";
import { fetchPopularPeople } from "./peopleSlice";

function* fetchConfigurationsHandler() {
  try {
    const configurationsFile = yield call(getConfigurationData);
    yield put(setConfigurations(configurationsFile));
  } catch (error) {
    yield call(alert, "Upss, nie pobrano pliku konfiguracyjnego");
  }
};

export function* watchFetchConfigurationsFile() {
  yield takeEvery(fetchPopularMovies.type, fetchConfigurationsHandler);
  yield takeEvery(fetchPopularPeople.type, fetchConfigurationsHandler);
}