import React from "react";
import Navigation from "common/Navbar";
import Tiles from "common/Tiles";
import Container from "common/Container";
import Pagination from "common/Pagination";
import MovieListPage from "features/MovieListPage";

const App = () => {
  return ( 
    <>
      <Navigation/>
      <MovieListPage/>

    </>
  ); 
};

export default App;
