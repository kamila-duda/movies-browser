import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import search from "assets/images/svg/Search.svg";
import { key } from "./searchQueryParameter";
import { useQueryParameter, useReplaceQueryParameter } from "hooks/useQueryParameter";
import { setCurrentPageFirst as setPageFirstMovies } from "features/moviesSlice";
import { setCurrentPageFirst as setPageFirstPeople } from "features/peopleSlice";
import { StyledIcon, StyledInput, StyledLabel } from "./styled";

const Search = () => {
  const query = useQueryParameter(key);
  const [searchQuery, setSearchQuery] = useState(query);
  const replaceQueryParameter = useReplaceQueryParameter(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const searchMovies = location.pathname.includes("movies");

  const debouncedReplaceQuery = (target) => {
    setTimeout(() => {
      replaceQueryParameter({
        key: key,
        value: target.value.trim() !== "" ? target.value : "",
      });
    }, 1000
    )
  }

  const onInputChange = ({ target }) => {
    setSearchQuery(target.value);
    debouncedReplaceQuery(target);

    if (searchMovies) dispatch(setPageFirstMovies());
    dispatch(setPageFirstPeople());
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
