import React from "react";
import { StyledTile, TileInnerWrapper } from "common/Tiles/Tile/styled";
import { StyledTileHeader } from "common/Tiles/Tile/TileHeader/styled";
import { StyledTileSubHeader, StyledDetails } from "common/Tiles/Tile/TileSubHeader/styled";
import { StyledTilePoster } from "common/Tiles/Tile/TilePoster/styled";
import { StyledTileDescription } from "common/Tiles/Tile/TileDescription/styled";
import TileTags from "common/Tiles/Tile/TileTags";
import TileReview from "common/Tiles/Tile/TileReview";
import TileDetails from "common/Tiles/Tile/TileDetails";
import NoPoster from "assets/images/svg/NoPoster.svg";

const Tile = ({
  poster,
  header,
  subheader,
  tags,
  review,
  details,
  description,
  horizontal,
  detailsTitle,
  detailsYear,
  detailsProduction,
  detailsReleaseDate,
  detalReview,
  peopleList,
}) => {

  return (
    <StyledTile horizontal={horizontal} people={peopleList === true ? "people" : ""}>
      <TileInnerWrapper>
        {poster ? (
          <StyledTilePoster src={poster} />
        ) : (
            <StyledTilePoster src={NoPoster} />
          )}
      </TileInnerWrapper>
      <TileInnerWrapper flex people={peopleList === true ? "people" : ""}>
        {header ? <StyledTileHeader>{header}</StyledTileHeader> : ""}
        {detailsTitle ? <StyledTileHeader detailsPage >{detailsTitle}</StyledTileHeader> : ""}
        {subheader ? (
          <StyledTileSubHeader >{subheader}</StyledTileSubHeader>
        ) : (
            ""
          )}
        {detailsYear ? (
          <StyledTileSubHeader detailsPage>{detailsYear}</StyledTileSubHeader>
        ) : (
            ""
          )}
        {detailsProduction ? (
          <StyledTileSubHeader details>Production:<StyledDetails>{detailsProduction}</StyledDetails></StyledTileSubHeader>
        ) : (
            ""
          )}
        {detailsReleaseDate ? (
          <StyledTileSubHeader details>Release date:<StyledDetails>{detailsReleaseDate}</StyledDetails></StyledTileSubHeader>
        ) : (
            ""
          )}
        {tags ? <TileTags /> : ""}
        {review ? <TileReview /> : ""}
        {detalReview ? <TileReview detailsPage={"detailsPage"} /> : ""}
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
