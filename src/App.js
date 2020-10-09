import React from "react";
import Navigation from "common/Navbar";
import Tiles from "common/Tiles/Tiles";
import Container from "common/Container"
import Header from "common/Header/Header";

const App = () => {
  return ( 
    <>
      <Navigation/>
      <Container>
        <Header/>
        <Tiles/>
       </Container>
    </>
  ); 
};

export default App;
