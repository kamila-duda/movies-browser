import {
  call,
  put,
  delay,
  takeLatest,
  debounce,
} from "redux-saga/effects";
import { getPersonDetails, getPopularPeople } from "features/getDataApi";
import {
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  setError,
} from "./peopleSlice";
import store from "store";

function* fetchPopularPeopleHandler({ payload = 1 }) {
  try {
    yield delay(500);
    const people = yield call(getPopularPeople, payload);
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(setError());
  }
}
function* fetchPersonDetailsHandler() {
  try {
    const personId = store.getState().people.personId;
    const details = yield call(getPersonDetails, personId);
    yield put(fetchPersonDetailsSuccess(details));
  } catch (error) {
    yield put(setError());
  }
}

export function* watchFetchPopularPeople() {
  yield debounce(500, fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}
