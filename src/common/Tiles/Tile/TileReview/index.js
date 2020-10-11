import React from "react";
import { StyledTileReviewRating } from "common/Tiles/Tile/TileReview/TileReviewRating/styled";
import { StyledTileReviewStar }  from "common/Tiles/Tile/TileReview/TileReviewStar/styled";
import { StyledTileReviewUserRatings }  from "common/Tiles/Tile/TileReview/TileReviewUserRatings/styled";
import { StyledTileReview }  from "common/Tiles/Tile/TileReview/styled";
import StarIcon from "assets/images/svg/star.svg";

const TileReview = () => {
  return (
    <StyledTileReview>
      <StyledTileReviewStar src={StarIcon} alt="test"/>
      <StyledTileReviewRating>7,8</StyledTileReviewRating>
      <StyledTileReviewUserRatings> 35 votes </StyledTileReviewUserRatings>
    </StyledTileReview>
  );
};

export default TileReview;
