import React from "react";
import Tile from "common/Tiles/Tile";
import { StyledTilesContainer, StyledTitle } from "common/Tiles/styled";

const Tiles = ({ title, body, peopleList }) => {
  if (peopleList) {
    return (
      <StyledTilesContainer people>
        <StyledTitle>{title}</StyledTitle>
        {body}
      </StyledTilesContainer>
    );
  } else {
    return (
      <StyledTilesContainer>
        <StyledTitle>{title}</StyledTitle>
        {body}
      </StyledTilesContainer>
    );
  }
};

export default Tiles;
