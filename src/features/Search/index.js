import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch} from "react-redux";
import search from "assets/images/svg/Search.svg";
import { key } from "./searchQueryParameter";
import { useQueryParameter, useReplaceQueryParameter } from "hooks/useQueryParameter";
import { setCurrentPageFirst as setPageFirstMovies } from "features/moviesSlice";
import { setCurrentPageFirst as setPageFirstPeople } from "features/peopleSlice";
import { StyledIcon, StyledInput, StyledLabel } from "./styled";


const Search = () => {
  const query = useQueryParameter(key);
  const replaceQueryParameter = useReplaceQueryParameter(true);
  const location = useLocation();
  const dispatch = useDispatch();
  const searchMovies = location.pathname.includes("movies");

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: key,
      value: target.value.trim() !== "" ? target.value : "",
    });
    if (searchMovies) dispatch(setPageFirstMovies());
    dispatch(setPageFirstPeople());
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
