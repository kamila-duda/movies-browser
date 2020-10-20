import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: true,
    currentPage: 1,
    person: [],
    personId: null,
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.people = [];
      state.loading = true;
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.people = people.results;
      state.loading = false;
    },
    fetchPopularPeopleError: (state) => {
      state.people = [];
      state.loading = false;
    },
    setCurrentPage: (state, { payload: people }) => {
      state.currentPage = people.page;
    },
    fetchPersonDetails: (state, { payload: person }) => {
      state.personId = person.id;
      state.person = person;
      state.loading = true;
    },
    fetchPersonDetailsSuccess: (state, { payload: details }) => {
      state.loading = false;
      state.details = details;
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
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
  setCurrentPage,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectPerson = (state) => selectPeopleState(state).person;

export default peopleSlice.reducer;
