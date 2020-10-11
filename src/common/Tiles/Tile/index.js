import React from "react";
import { StyledTile, TileInnerWrapper } from "common/Tiles/Tile/styled";
import { StyledTileHeader } from "common/Tiles/Tile/TileHeader/styled";
import { StyledTileSubHeader  }from "common/Tiles/Tile/TileSubHeader/styled";
import { StyledTilePoster } from "common/Tiles/Tile/TilePoster/styled";
import { StyledTileDescription } from "common/Tiles/Tile/TileDescription/styled";
import TileTags from "common/Tiles/Tile/TileTags";
import TileReview from "common/Tiles/Tile/TileReview";
import TileDetails from "common/Tiles/Tile/TileDetails";
import Poster from "assets/images/jpg/poster.jpg";
import NoPoster from "assets/images/svg/NoPoster.svg";

const Tile  = (
    { 
    poster, 
    header, 
    subheader, 
    tags, 
    review, 
    details,
    description,
}) => {
    return (
      <StyledTile>
        <TileInnerWrapper>
          { poster ? 
            <StyledTilePoster src={Poster}/> : <StyledTilePoster src={NoPoster}/> 
          }
        </TileInnerWrapper>
        <TileInnerWrapper flex>
          { header && <StyledTileHeader>Mulan</StyledTileHeader> }
          { subheader && <StyledTileSubHeader>2020</StyledTileSubHeader> }
          { tags && <TileTags/> }  
          { review && <TileReview/> } 
          { details && <TileDetails/> } 
          { description && 
          <StyledTileDescription>
            A young Chinese maiden disguises herself as a male warrior
            in order to save her father.
          </StyledTileDescription> }
        </TileInnerWrapper>         
      </StyledTile>
    );
};

export default Tile;