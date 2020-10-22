import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: true,
    isError: false,
    currentPage: 1,
    person: [],
    personId: null,
    personCast: [],
    personCrew: [],
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = true;
      state.isError = false;
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.people = people;
      state.loading = false;
      state.isError = false;
      state.results = people.total_results;
    },
    increaseCurrentPage: (state) => {
      state.currentPage = ++state.currentPage;
    },
    decreaseCurrentPage: (state) => {
      state.currentPage = --state.currentPage;
    },
    setCurrentPageFirst: (state) => {
      state.currentPage = 1;
    },
    setCurrentPageLast: (state, { payload: lastPage }) => {
      state.currentPage = lastPage;
    },
    fetchPersonDetails: (state, { payload: personId }) => {
      state.personId = personId;
      state.loading = true;
    },
    fetchPersonDetailsSuccess: (state, { payload: details }) => {
      state.loading = false;
      state.person = details;
      state.personCast = details.movie_credits.cast;
      if (details.movie_credits.crew.length > 0) {
        state.personCrew = details.movie_credits.crew;
      }
    },
    setError: (state) => {
      state.isError = true;
      state.loading = false;
    },
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  setCurrentPage,
  setError,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people.results;
export const selectResults = (state) => selectPeopleState(state).results;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectIsError = (state) => selectPeopleState(state).isError;
export const selectTotalPages = (state) =>
  selectPeopleState(state).people.total_pages;
export const selectCurrentPage = (state) =>
  selectPeopleState(state).currentPage;
export const selectPerson = (state) => selectPeopleState(state).person;
export const selectPersonCast = (state) => selectPeopleState(state).personCast;
export const selectPersonCrew = (state) => selectPeopleState(state).personCrew;
export default peopleSlice.reducer;
