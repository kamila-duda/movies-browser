import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    loading: true,
    currentPage: 1,
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
  },
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  setCurrentPage,
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectLoading = (state) => selectPeopleState(state).loading;

export default peopleSlice.reducer;
