import React from "react";
import { StyledTileTag, StyledTileTags } from "./styled";
import { selectGenres } from "features/moviesSlice";
import { useSelector } from "react-redux";

const TileTags = ({ tags }) => {
  const genres = useSelector(selectGenres);
  if (tags.length > 0) {
    return (
      <StyledTileTags>
        {tags.map((tag) => (
          <StyledTileTag key={tag}>
            {genres.find(({ id }) => id === tag).name}
          </StyledTileTag>
        ))}
      </StyledTileTags>
    );
  } return "";
};

export default TileTags;
