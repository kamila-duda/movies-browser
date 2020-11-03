import React from "react";
import film from "assets/images/svg/film.svg";

import { Wrapper, HeaderTitle, StyledImage } from "./styled";

const NoFavoriteMoviePage = () => {
  return (
    <Wrapper>
      <HeaderTitle>
        You have no favorite movies. Please add some movies to watch.
      </HeaderTitle>
      <StyledImage src={film} alt="Film" />
    </Wrapper>
  );
};

export default NoFavoriteMoviePage;
