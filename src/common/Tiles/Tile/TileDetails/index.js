import React from "react";
import { StyledTileDetails, StyledTileRelease} from "common/Tiles/Tile/TileDetails/styled";
import TileProduction from "common/Tiles/Tile/TileDetails/TileProduction";

const TileDetails = () => {
    return (
        <StyledTileDetails>
            <TileProduction/>
            <StyledTileRelease/>
        </StyledTileDetails> 
    );  
};

export default TileDetails;