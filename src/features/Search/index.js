import React from "react";
import search from "assets/images/svg/Search.svg";
import { key } from "./searchQueryParameter";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameter";
import { StyledIcon, StyledInput, StyledLabel } from "./styled";
import { useLocation } from "react-router-dom";

const Search = () => {
  const query = useQueryParameter(key);
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();
  const searchMovies = location.pathname.includes("movies");
  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: key,
      value: target.value.trim() !== "" ? target.value : "",
    });
  };
  return (
    <StyledLabel>
      <StyledIcon src={search} />
      <StyledInput
        placeholder={`Search for ${searchMovies ? "movies" : "people"}...`}
        value={query || ""}
        onChange={onInputChange}
      />
    </StyledLabel>
  );
};
export default Search;
