import { watchFetchPopularMovies } from "features/MoviesSaga";
import { watchFetchPopularPeople } from "features/PeopleSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies(), watchFetchPopularPeople()]);
}
