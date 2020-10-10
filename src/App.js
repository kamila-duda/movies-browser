import React from "react";
import Navigation from "common/Navbar";
import Tiles from "common/Tiles";
import Container from "common/Container"

const App = () => {
  return ( 
    <>
      <Navigation/>
      <Container>
        <Tiles/>
       </Container>
    </>
  ); 
};

export default App;
