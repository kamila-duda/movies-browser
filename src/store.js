import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { watchMoviesAction } from "features/moviesSaga";
import moviesReducers from "features/moviesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducers,
  },
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(watchMoviesAction);

export default store;