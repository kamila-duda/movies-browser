import React from "react";
import {
  StyledTile,
  StyledTileSubHeader,
  StyledTileHeader,
  TileInnerWrapper,
  StyledTilePoster,
  StyledDetails,
  StyledTileDescription,
} from "common/Tiles/Tile/styled";
import TileReview from "common/Tiles/Tile/TileReview";
import NoPoster from "assets/images/svg/NoPoster.svg";
import TileTags from "./TileTags";

const Tile = ({
  poster,
  header,
  subheader,
  tags,
  review,
  description,
  voteAverage,
  horizontal,
  detailsTitle,
  detailsYear,
  detailsProduction,
  detailsReleaseDate,
  peopleList,
  placeOfBirth,
  birthday,
  genresId,
}) => {
  return (
    <StyledTile
      horizontal={horizontal}
      people={peopleList === true ? "people" : ""}
    >
      <TileInnerWrapper>
        {poster ? (
          <StyledTilePoster src={poster} />
        ) : (
          <StyledTilePoster src={NoPoster} />
        )}
      </TileInnerWrapper>
      <TileInnerWrapper flex people={peopleList === true ? "people" : ""}>
        {header ? <StyledTileHeader>{header}</StyledTileHeader> : ""}
        {detailsTitle ? (
          <StyledTileHeader detailsPage>{detailsTitle}</StyledTileHeader>
        ) : (
          ""
        )}
        {subheader ? (
          <StyledTileSubHeader>{subheader}</StyledTileSubHeader>
        ) : (
          ""
        )}
        {detailsYear ? (
          <StyledTileSubHeader detailsPage>{detailsYear}</StyledTileSubHeader>
        ) : (
          ""
        )}
        {birthday ? (
          <StyledTileSubHeader details>
            Birthday:<StyledDetails>{birthday}</StyledDetails>
          </StyledTileSubHeader>
        ) : (
          ""
        )}
        {placeOfBirth ? (
          <StyledTileSubHeader details>
            Place of birth:
            <StyledDetails>{placeOfBirth}</StyledDetails>
          </StyledTileSubHeader>
        ) : (
          ""
        )}
        {detailsProduction ? (
          <StyledTileSubHeader details>
            Production:
            {detailsProduction.map((country) => (
              <StyledDetails key={country.name}>{country.name},</StyledDetails>
            ))}
          </StyledTileSubHeader>
        ) : (
          ""
        )}
        {detailsReleaseDate ? (
          <StyledTileSubHeader details>
            Release date:<StyledDetails>{detailsReleaseDate}</StyledDetails>
          </StyledTileSubHeader>
        ) : (
          ""
        )}
        {tags ? <TileTags tags={tags} /> : ""}
        {genresId ? <TileTags genresId={genresId} /> : ""}
        {review || voteAverage ? (
          <TileReview review={review} voteAverage={voteAverage} />
        ) : (
          ""
        )}
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
