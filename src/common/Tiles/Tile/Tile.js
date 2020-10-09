import styled from "styled-components";
import React from "react";
import TileHeader from "common/Tiles/Tile/TileHeader/TileHeader";
import TileSubHeader from "common/Tiles/Tile/TileSubHeader/TileSubHeader";
import TilePoster from "common/Tiles/Tile/TilePoster/TilePoster";
import TileTags from "common/Tiles/Tile/TileTags/TileTags";
import TileReview from "common/Tiles/Tile/TileReview/TileReview";
import Poster from "assets/images/poster.jpg";

const StyledTile = styled.div`
    max-width: 324px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    justify-content: space-between;  
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;

const Tile = () => {
    return (
        <StyledTile>
            <TilePoster src={Poster}/>
            <TileHeader>Mulan</TileHeader>
            <TileSubHeader>2020</TileSubHeader>
            <TileTags/>
            <TileReview/>
        </StyledTile>
    );
};

export default Tile;