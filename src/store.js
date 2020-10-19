import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import configurationReducer from "./features/configurationSlice";
import moviesReducer from "./features/moviesSlice";
import peopleReducer from "./features/peopleSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    configuration: configurationReducer,
    movies: moviesReducer,
    people: peopleReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
