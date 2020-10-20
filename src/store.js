import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import configurationReducer from "./features/configurationSlice";
import moviesReducer from "./features/moviesSlice";
import peopleReducer from "./features/peopleSlice";
import configurationsReducer from "./features/configurationsSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    movies: moviesReducer,
    people: peopleReducer,
    configurations: configurationsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
