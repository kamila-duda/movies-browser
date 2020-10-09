import React from "react";
import search from "assets/images/Search.svg";
import { StyledIcon, StyledInput, StyledLabel } from "./styled";

const Search = () => {
  return (
    <StyledLabel>
      <StyledIcon src={search} />
      <StyledInput placeholder="Search for movies..." />
    </StyledLabel>
  );
};
export default Search;
