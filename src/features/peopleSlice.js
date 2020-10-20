import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: true,
    currentPage: 1,
    person: [],
    personId: null,
    personCast: [],
    personCrew: [],
    details: {},
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.people = [];
      state.loading = true;
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.people = people;
      state.loading = false;
    },
    fetchPopularPeopleError: (state) => {
      state.people = [];
      state.loading = false;
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
    fetchPersonDetails: (state, { payload: person }) => {
      state.personId = person.id;
      state.person = person;
      state.loading = true;
    },
    fetchPersonDetailsSuccess: (state, { payload: details }) => {
      state.details = details;
      state.loading = false;
      state.personCast = details.movie_credits.cast;
      if (details.movie_credits.crew.length > 0) {
        state.personCrew = details.movie_credits.crew;
      }
    },
    fetchPersonDetailsError: (state) => {
      state.loading = false;
    },
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  setCurrentPage,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people.results;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectTotalPages = (state) =>
  selectPeopleState(state).people.total_pages;
export const selectCurrentPage = (state) =>
  selectPeopleState(state).currentPage;
export const selectPerson = (state) => selectPeopleState(state).person;
export const selectPersonCast = (state) => selectPeopleState(state).personCast;
export const selectPersonCrew = (state) => selectPeopleState(state).personCrew;
export const selectPersonDetails = (state) => selectPeopleState(state).details;
export default peopleSlice.reducer;
