import React from "react";
import { StyledTileReviewRating, ReviewRatingScale } from "common/Tiles/Tile/TileReview/TileReviewRating/styled";
import { StyledTileReviewStar } from "common/Tiles/Tile/TileReview/TileReviewStar/styled";
import { StyledTileReviewUserRatings } from "common/Tiles/Tile/TileReview/TileReviewUserRatings/styled";
import { StyledTileReview } from "common/Tiles/Tile/TileReview/styled";
import StarIcon from "assets/images/svg/star.svg";

const TileReview = ({ detailsPage }) => {
  return (
    <StyledTileReview>
      <StyledTileReviewStar detailsPage={detailsPage} src={StarIcon} alt="test" />
      <StyledTileReviewRating detailsPage={detailsPage}>
        7,8
        <ReviewRatingScale detailsPage={detailsPage}>/10</ReviewRatingScale>
      </StyledTileReviewRating>
      <StyledTileReviewUserRatings detailsPage={detailsPage}> 35 votes </StyledTileReviewUserRatings>
    </StyledTileReview>
  );
};

export default TileReview;
