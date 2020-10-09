import styled from "styled-components";
import React from "react";
import TileTag from "common/Tiles/Tile/TileTags/TileTag/TileTag";

const StyledTileTags = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const TileTags = () => {
    return (
        <StyledTileTags>
            <TileTag>Action</TileTag>
            <TileTag>Adventure</TileTag>
            <TileTag>Drama</TileTag>
        </StyledTileTags>
    );
};

export default TileTags;
