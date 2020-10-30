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
  StyledLink,
} from "common/Tiles/Tile/styled";
import TileReview from "common/Tiles/Tile/TileReview";
import NoPoster from "assets/images/svg/NoPoster.svg";
import TileTags from "./TileTags";
import { toMovieDetails } from "routes";
import { fetchMovieDetails } from "features/moviesSlice";
import { useDispatch } from "react-redux";

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
  movieId,
}) => {
  const [moreText, setMoreText] = useState(false);

  const dispatch = useDispatch();
  return (
    <StyledTile
      horizontal={horizontal}
      people={peopleList === true ? "people" : ""}
    >
      <TileInnerWrapper>
        {poster ? (
          peopleList ? (
            <StyledTilePoster
              people={peopleList === true ? "people" : ""}
              src={poster}
            />
          ) : (
            <StyledLink
              key={movieId}
              to={toMovieDetails({ id: movieId })}
              onClick={() => dispatch(fetchMovieDetails(movieId))}
            >
              <StyledTilePoster
                people={peopleList === true ? "people" : ""}
                src={poster}
              />
            </StyledLink>
          )
        ) : peopleList ? (
          <StyledTilePoster
            people={peopleList === true ? "people" : ""}
            src={NoPoster}
          />
        ) : (
          <StyledLink
            key={movieId}
            to={toMovieDetails({ id: movieId })}
            onClick={() => dispatch(fetchMovieDetails(movieId))}
          >
            <StyledTilePoster
              people={peopleList === true ? "people" : ""}
              src={NoPoster}
            />
          </StyledLink>
        )}
      </TileInnerWrapper>
      <TileInnerWrapper flex>
        {header ? (
          peopleList ? (
            <StyledTileHeader people={peopleList === true ? "people" : ""}>
              {header}
            </StyledTileHeader>
          ) : (
            <StyledLink
              key={movieId}
              to={toMovieDetails({ id: movieId })}
              onClick={() => dispatch(fetchMovieDetails(movieId))}
            >
              <StyledTileHeader people={peopleList === true ? "people" : ""}>
                {header}
              </StyledTileHeader>
            </StyledLink>
          )
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
          <TileReview
            review={review}
            voteAverage={voteAverage}
            movieId={movieId}
          />
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
