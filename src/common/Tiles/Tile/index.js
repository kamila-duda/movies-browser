import React from "react";
import {
  StyledTile,
  StyledTileSubHeader,
  TileInnerWrapper,
  StyledTilePoster,
  StyledDetails,
} from "common/Tiles/Tile/styled";
import { StyledTileHeader } from "common/Tiles/Tile/TileHeader/styled";
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
      {tags ? <TileTags tags={tags} /> : ""}
      {review || voteAverage ? (
        <TileReview review={review} voteAverage={voteAverage} />
      ) : (
        ""
      )}
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
