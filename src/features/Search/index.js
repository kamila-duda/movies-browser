import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { debounce } from "lodash";
import search from "assets/images/svg/Search.svg";
import { key } from "./searchQueryParameter";
import { useQueryParameter, useReplaceQueryParameter } from "hooks/useQueryParameter";
import { StyledIcon, StyledInput, StyledLabel } from "./styled";

const Search = () => {
  const query = useQueryParameter(key);
  const [searchQuery, setSearchQuery] = useState(query);
  const replaceQueryParameter = useReplaceQueryParameter(true);
  const location = useLocation();
  const searchMovies = location.pathname.includes("movies");

  useEffect(() => { setSearchQuery("") }, [searchMovies]);

  const debouncedReplaceQuery = debounce((target) => replaceQueryParameter({
    key: key,
    value: target.value.trim() !== "" ? target.value : "",
  }), 500)

  const onInputChange = ({ target }) => {
    setSearchQuery(target.value);
    debouncedReplaceQuery(target);
  };

  return (
    <StyledLabel>
      <StyledIcon src={search} />
      <StyledInput
        placeholder={`Search for ${searchMovies ? "movies" : "people"}...`}
        value={searchQuery || ""}
        onChange={onInputChange}
      />
    </StyledLabel>
  );
};
export default Search;
