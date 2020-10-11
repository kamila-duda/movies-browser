import React from "react";
import { StyledTileProduction } from "common/Tiles/Tile/TileDetails/TileProduction/styled";

const TileProduction = () => {
    return(
        <StyledTileProduction> 
            Production: <span className="tile__production">24.03.1990</span> 
        </StyledTileProduction>
    );
};

export default TileProduction;