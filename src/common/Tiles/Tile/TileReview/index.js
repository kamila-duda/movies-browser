import React from "react";
import {
  StyledTileReview,
  StyledTileReviewUserRatings,
  StyledTileReviewRating,
  StyledTileReviewStar,
} from "common/Tiles/Tile/TileReview/styled";
import StarIcon from "assets/images/svg/star.svg";

const TileReview = ({ review, voteAverage, detailsPage }) => {
  return (
    <StyledTileReview>
      <StyledTileReviewStar
        detailsPage={detailsPage}
        src={StarIcon}
        alt="star"
      />
      <StyledTileReviewRating detailsPage={detailsPage}>
        {voteAverage}/10
      </StyledTileReviewRating>
      <StyledTileReviewUserRatings detailsPage={detailsPage}>
        {review} votes{" "}
      </StyledTileReviewUserRatings>
    </StyledTileReview>
  );
};

export default TileReview;
