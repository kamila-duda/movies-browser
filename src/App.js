import React from "react";
import Navigation from "common/Navbar";
import Tiles from "common/Tiles";
import Container from "common/Container";
import Pagination from "common/Pagination";

const App = () => {
  return ( 
    <>
      <Navigation/>
      <Container>
        <Tiles/>
        <Pagination/>
       </Container>

    </>
  ); 
};

export default App;
