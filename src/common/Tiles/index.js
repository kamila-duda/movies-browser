import React from "react";
import Tile from "common/Tiles/Tile";
import { StyledTilesContainer } from "common/Tiles/styled";

const Tiles = () => {
  return (
    <StyledTilesContainer>
      <Tile poster header subheader tags review />
      <Tile poster header subheader tags review />
      <Tile poster header subheader tags review />
      <Tile poster header subheader tags review />
      <Tile poster header subheader tags review />
      <Tile poster header subheader tags review />
    </StyledTilesContainer>
  );
};

export default Tiles;