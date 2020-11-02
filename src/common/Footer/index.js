import React from "react";
import {
  StyledFooterContainer,
  StyledCredits,
  StyledAuthorsInfo,
  StyledLink,
} from "./styled";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledCredits>
        This product uses the TMDb API but is not endorsed or certified by TMDb.
      </StyledCredits>
      <StyledAuthorsInfo>
        This application is created with cooperative{" "}
        <StyledLink
          href="https://github.com/kamila-duda/movies-browser"
          target="_blank"
        >
          [see github]
        </StyledLink> © 2020
      </StyledAuthorsInfo>
    </StyledFooterContainer>
  );
};

export default Footer;
