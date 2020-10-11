import React from "react";
import { StyledTileRelease } from "common/Tiles/Tile/TileDetails/TileRelease/styled";

const TileRelease = () => {
  return(
    <StyledTileRelease> 
      Release date: <span className="tile__release">24.03.1990</span> 
    </StyledTileRelease>
  );
};

export default TileRelease;