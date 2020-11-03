import React from "react";
import Navigation from "common/Navbar";
import MovieListPage from "features/MovieListPage";
import PeopleListPage from "features/PeopleListPage";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { toMoviesList, toPeopleList, toMovieDetails, toPersonDetails, toFavoriteMovies } from "./routes";
import MovieDetailsPage from "features/MovieDetailsPage";
import PersonDetailsPage from "features/PersonDetailsPage";
import FavoriteMovies from "features/FavoriteMovies";
import Footer from "common/Footer";


const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route exact path={toMovieDetails()}>
          <MovieDetailsPage />
        </Route>
        <Route exact path={toPersonDetails()}>
          <PersonDetailsPage />
        </Route>
        <Route exact path={toMoviesList()}>
          <MovieListPage />
        </Route>
        <Route exact path={toPeopleList()}>
          <PeopleListPage />
        </Route>
        <Route exact path={toFavoriteMovies()}>
          <FavoriteMovies />
        </Route>
        <Route path="/">
          <Redirect to={toMoviesList()} />
        </Route>
      </Switch>
      <Footer/>
    </HashRouter>
  );
};

export default App;
