import React from "react";
import { StyledTileDetails } from "common/Tiles/Tile/TileDetails/styled";
import TileProduction from "common/Tiles/Tile/TileDetails/TileProduction";
import TileRelease from "common/Tiles/Tile/TileDetails/TileRelease";

const TileDetails = () => {
    return (
        <StyledTileDetails>
            <TileProduction/>
            <TileRelease/>
        </StyledTileDetails> 
    );  
};

export default TileDetails;