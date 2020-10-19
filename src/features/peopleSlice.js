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
  }
});

export const {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast
} = peopleSlice.actions;

const selectPeopleState = (state) => state.people;
export const selectPeople = (state) => selectPeopleState(state).people.results;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectTotalPages = (state) => selectPeopleState(state).people.total_pages;
export const selectCurrentPage = (state) => selectPeopleState(state).currentPage;

export default peopleSlice.reducer;
