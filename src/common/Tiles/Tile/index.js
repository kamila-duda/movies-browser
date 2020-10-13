import React from "react";
import {
  StyledTile,
  StyledTileSubHeader,
  TileInnerWrapper,
} from "common/Tiles/Tile/styled";
import { StyledTileHeader } from "common/Tiles/Tile/TileHeader/styled";
import { StyledTilePoster } from "common/Tiles/Tile/TilePoster/styled";
import { StyledTileDescription } from "common/Tiles/Tile/TileDescription/styled";
import TileReview from "common/Tiles/Tile/TileReview";
import TileDetails from "common/Tiles/Tile/TileDetails";
import NoPoster from "assets/images/svg/NoPoster.svg";
import TileTags from "./TileTags";

const Tile = ({
  poster,
  header,
  subheader,
  tags,
  review,
  details,
  description,
  voteAverage,
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
      <TileInnerWrapper flex>
        {header ? <StyledTileHeader>{header}</StyledTileHeader> : ""}
        {subheader ? (
          <StyledTileSubHeader>{subheader}</StyledTileSubHeader>
        ) : (
          ""
        )}
        {tags ? <TileTags tags={tags} /> : ""}
        {review || voteAverage ? (
          <TileReview review={review} voteAverage={voteAverage} />
        ) : (
          ""
        )}
        {details ? <TileDetails /> : ""}
        {description ? (
          <StyledTileDescription>{description}</StyledTileDescription>
        ) : (
          ""
        )}
      </TileInnerWrapper>
    </StyledTile>
  );
};

export default Tile;
