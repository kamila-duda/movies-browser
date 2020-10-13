import React from "react";
import { StyledTileReviewRating } from "common/Tiles/Tile/TileReview/TileReviewRating/styled";
import { StyledTileReviewStar } from "common/Tiles/Tile/TileReview/TileReviewStar/styled";
import { StyledTileReviewUserRatings } from "common/Tiles/Tile/TileReview/TileReviewUserRatings/styled";
import { StyledTileReview } from "common/Tiles/Tile/TileReview/styled";
import StarIcon from "assets/images/svg/star.svg";

const TileReview = ({ review, voteAverage }) => {
  return (
    <StyledTileReview>
      <StyledTileReviewStar src={StarIcon} alt="test" />
      <StyledTileReviewRating>{voteAverage}</StyledTileReviewRating>
      <StyledTileReviewUserRatings>{review} votes </StyledTileReviewUserRatings>
    </StyledTileReview>
  );
};

export default TileReview;
