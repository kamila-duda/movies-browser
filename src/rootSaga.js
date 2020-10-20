import { watchFetchConfigurationsFile } from "features/configurationsSaga";
import { watchFetchPopularMovies } from "features/popularMoviesSaga";
import { watchFetchPopularPeople } from "features/popularPeopleSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchFetchConfigurationsFile(), watchFetchPopularMovies(), watchFetchPopularPeople()]);
}
