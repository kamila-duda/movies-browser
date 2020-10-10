import styled from "styled-components";
import React from "react";
import Tile from "common/Tiles/Tile/Tile";

const StyledTilesContainer = styled.div`
    display: grid;
    grid-gap: 24px; 
    grid-template-columns: repeat(4, minmax(324px, 1fr));
    justify-content: center;
    height: 650px;
    margin-top: 214px;
    @media (max-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: repeat(3, 1fr);
  }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        grid-template-columns: 1fr;
  }
`;

const Tiles = () => {
    return (
        <StyledTilesContainer>
            <Tile poster header subheader tags />
            <Tile poster header subheader tags review />
            <Tile poster header subheader tags review />
            <Tile poster header subheader tags review />
            <Tile poster header subheader tags review />
            <Tile poster header subheader tags review />
        </StyledTilesContainer>
    );
};

export default Tiles;