import React from "react";
import { MovieBanner, Container, StyledImage, MovieHeader, MovieTitle, RatingHeader, StyledStarImage, Rating, Votes } from "./styled";
import backgroundImage from "assets/images/png/HeroBaner.png"
import star from "assets/images/svg/star.svg"

const HeroBanner = () => {
  return (
    <MovieBanner>
      <Container>
        <StyledImage src={backgroundImage} alt="MovieBanner" />
        <MovieHeader>
          <MovieTitle>Mulan long title</MovieTitle>
          <RatingHeader>
            <div>
              <StyledStarImage src={star} />
              <Rating>7,8</Rating>
              / 10
           </div>
            <Votes>
              335 votes
            </Votes>
          </RatingHeader>
        </MovieHeader>
      </Container>
    </MovieBanner>
  )
};

export default HeroBanner;