import { createSlice } from "@reduxjs/toolkit";

export const configurationsSlice = createSlice({
  name: "configurations",
  initialState: {
    configurations: {},
  },
  reducers: {
    fetchConfigurationsFile: (state) => {
      state.movies = [];
      state.loading = true;
    },
    setConfigurations: (state, { payload: configurationsFile }) => {
      state.configurations = configurationsFile;
    },
  },
});

export const { setConfigurations } = configurationsSlice.actions;

export const selectConfigurations = (state) => state.configurations.configurations;
export const selectImages = (state) => selectConfigurations(state).images;

export default configurationsSlice.reducer;
