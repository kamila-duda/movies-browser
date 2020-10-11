import React from "react";
import { StyledTileTags } from "common/Tiles/Tile/TileTags/styled";
import { StyledTileTag } from "common/Tiles/Tile/TileTags/TileTag/styled";

const TileTags = () => {
    return (
        <StyledTileTags>
            <StyledTileTag>Action</StyledTileTag>
            <StyledTileTag>Adventure</StyledTileTag>
            <StyledTileTag>Drama</StyledTileTag>
        </StyledTileTags>
    );
};

export default TileTags;
