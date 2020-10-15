import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getPopularPeople } from "features/getDataApi";
import {
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} from "./peopleSlice";

function* fetchPopularPeopleHandler() {
  try {
    yield delay(500);
    const people = yield call(getPopularPeople);
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
    yield call(alert, "Upss, coś poszło nie tak");
  }
}

export function* watchFetchPopularPeople() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
}
