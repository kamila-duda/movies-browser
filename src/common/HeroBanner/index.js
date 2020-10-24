import React from "react";
import {
  MovieBanner,
  Container,
  StyledImage,
  MovieHeader,
  MovieTitle,
  RatingHeader,
  StyledStarImage,
  Rating,
  Votes,
} from "./styled";
import star from "assets/images/svg/star.svg";

const HeroBanner = ({ backdrop, movieTitle, vote_average, vote }) => {
  return (
    <MovieBanner>
      <Container>
        <StyledImage src={backdrop} alt="MovieBanner" />
        <MovieHeader>
          <MovieTitle>{movieTitle}</MovieTitle>
          <RatingHeader>
            <div>
              <StyledStarImage src={star} />
              <Rating>{vote_average}/10</Rating>
            </div>
            <Votes>{vote} votes</Votes>
          </RatingHeader>
        </MovieHeader>
      </Container>
    </MovieBanner>
  );
};

export default HeroBanner;
