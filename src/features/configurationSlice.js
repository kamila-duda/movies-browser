import { createSlice } from "@reduxjs/toolkit";

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: {
    configurations: {},
  },
  reducers: {
    setConfigurations: (state, { payload: configurationsFile }) => {
      state.configurations = configurationsFile;
    },
}
});

export const {
  setConfigurations,
} = configurationSlice.actions;

const selectConfigurationState = (state) => state.configuration;
export const selectConfigurations = (state) =>
selectConfigurationState(state).configurations;
export const selectImages = (state) => selectConfigurations(state).images;

export default configurationSlice.reducer;
