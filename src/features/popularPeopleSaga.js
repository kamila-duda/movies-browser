import {
  takeEvery,
  call,
  put,
  delay,
  takeLatest,
  debounce,
} from "redux-saga/effects";
import { getPersonDetails, getPopularPeople } from "features/getDataApi";
import {
  fetchPersonDetails,
  fetchPersonDetailsError,
  fetchPersonDetailsSuccess,
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} from "./peopleSlice";
import store from "store";

function* fetchPopularPeopleHandler({ payload }) {
  try {
    yield delay(500);
    const people = yield call(getPopularPeople, payload);
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
    yield call(alert, "Upss, coś poszło nie tak");
  }
}
function* fetchPersonDetailsHandler() {
  try {
    const personId = store.getState().people.personId;
    console.log(personId);
    const details = yield call(getPersonDetails, personId);
    yield put(fetchPersonDetailsSuccess(details));
  } catch (error) {
    yield put(fetchPersonDetailsError());
    yield call(alert, error);
  }
}

export function* watchFetchPopularPeople() {
  yield debounce(500, fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
