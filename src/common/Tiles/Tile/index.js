import React, { useState } from "react";
import {
  StyledTile,
  StyledTileSubHeader,
  StyledTileHeader,
  TileInnerWrapper,
  StyledTilePoster,
  StyledDetails,
  StyledTileDescription,
  StyledMobileDescription,
  StyledMoreButton,
  StyledMoreButtonMobile,
  StyledMobileWrapper,
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
  const [moreText, setMoreText] = useState(false);

  return (
    <StyledTile
      horizontal={horizontal}
      people={peopleList === true ? "people" : ""}
    >
      <TileInnerWrapper>
        {poster ? (
          <StyledTilePoster
            people={peopleList === true ? "people" : ""}
            src={poster}
          />
        ) : (
          <StyledTilePoster
            people={peopleList === true ? "people" : ""}
            src={NoPoster}
          />
        )}
      </TileInnerWrapper>
      <TileInnerWrapper flex>
        {header ? (
          <StyledTileHeader people={peopleList === true ? "people" : ""}>
            {header}
          </StyledTileHeader>
        ) : (
          ""
        )}
        {detailsTitle ? (
          <StyledTileHeader detailsPage>{detailsTitle}</StyledTileHeader>
        ) : (
          ""
        )}
        {subheader ? (
          <StyledTileSubHeader people={peopleList === true ? "people" : ""}>
            {subheader}
          </StyledTileSubHeader>
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
          description.length > 400 ? (
            <>
              <StyledTileDescription>
                {moreText ? description : `${description.substring(0, 400)}...`}
              </StyledTileDescription>
              <StyledMoreButton onClick={() => setMoreText(!moreText)}>
                {moreText ? "Read less <<" : "Read more >>"}
              </StyledMoreButton>
            </>
          ) : (
            <StyledTileDescription>{description}</StyledTileDescription>
          )
        ) : (
          ""
        )}
      </TileInnerWrapper>
      <StyledMobileWrapper>
      {description ? (
          description.length > 400 ? (
            <>
              <StyledMobileDescription>
                {moreText ? description : `${description.substring(0, 400)}...`}
              </StyledMobileDescription>
              <StyledMoreButtonMobile onClick={() => setMoreText(!moreText)}>
                {moreText ? "Read less" : "Read more"}
              </StyledMoreButtonMobile>
            </>
          ) : (
            <StyledMobileDescription>{description}</StyledMobileDescription>
          )
        ) : (
          ""
        )}
      </StyledMobileWrapper>
    </StyledTile>
  );
};

export default Tile;
