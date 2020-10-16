import React from "react";
import Navigation from "common/Navbar";
import MovieListPage from "features/MovieListPage";
import PeopleListPage from "features/PeopleListPage";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { toMoviesList, toPeopleList, toMovieDetails } from "./routes";
import MovieDetailsPage from "features/MovieDetailsPage";


const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path={toMovieDetails()}>
          <MovieDetailsPage />
        </Route>
        <Route exact path={toMoviesList()}>
          <MovieListPage />
        </Route>
        <Route exact path={toPeopleList()}>
          <PeopleListPage />
        </Route>
        <Route path="/">
          <Redirect to={toMoviesList()} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
