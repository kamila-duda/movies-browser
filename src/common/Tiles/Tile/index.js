import React from "react";
import { StyledTile, TileInnerWrapper } from "common/Tiles/Tile/styled";
import { StyledTileHeader } from "common/Tiles/Tile/TileHeader/styled";
import { StyledTileSubHeader } from "common/Tiles/Tile/TileSubHeader/styled";
import { StyledTilePoster } from "common/Tiles/Tile/TilePoster/styled";
import { StyledTileDescription } from "common/Tiles/Tile/TileDescription/styled";
import { StyledTileDetails } from "common/Tiles/Tile/TileDetails/styled";
import TileTags from "common/Tiles/Tile/TileTags";
import TileReview from "common/Tiles/Tile/TileReview";
import NoPoster from "assets/images/svg/NoPoster.svg";

const Tile = ({
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
        {poster ? (
          <StyledTilePoster src={poster} />
        ) : (
          <StyledTilePoster src={NoPoster} />
        )}
      </TileInnerWrapper>
      <TileInnerWrapper>
        {header && <StyledTileHeader>{header}</StyledTileHeader>}
        {subheader && <StyledTileSubHeader>{subheader}</StyledTileSubHeader>}
        {tags && <TileTags/>}
        {review && <TileReview/>}
        {details && <StyledTileDetails>{details}</StyledTileDetails>}
        {description && <StyledTileDescription>{description}</StyledTileDescription>}
      </TileInnerWrapper>
    </StyledTile>
  );
};

export default Tile;
