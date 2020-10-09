import React from "react";
import styled from "styled-components";
import TileReviewRating from "common/Tiles/Tile/TileReview/TileReviewRating/TileReviewRating";
import TileReviewStar from "common/Tiles/Tile/TileReview/TileReviewStar/TileReviewStar";
import TileReviewUserRatings from "common/Tiles/Tile/TileReview/TileReviewUserRatings/TileReviewUserRatings";
import StarIcon from "assets/images/star.svg";

const StyledTileReview = styled.div`
    display: flex;
`;

const TileReview = () => {
    return (
        <StyledTileReview>
            <TileReviewStar src={StarIcon} alt="test"/>
            <TileReviewRating>7,8</TileReviewRating>
            <TileReviewUserRatings> 35 votes </TileReviewUserRatings>
        </StyledTileReview>
    );
};

export default TileReview;



