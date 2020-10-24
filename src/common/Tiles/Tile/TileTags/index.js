import React from "react";
import { StyledTileTag, StyledTileTags } from "./styled";
import { selectGenres } from "features/moviesSlice";
import { useSelector } from "react-redux";

const TileTags = ({ tags, genresId }) => {
  const genres = useSelector(selectGenres);
  return (
    <>
      {tags ? (
        <StyledTileTags>
          {tags.slice(0, 3).map((tag) => (
            <StyledTileTag key={tag}>
              {genres.find(({ id }) => id === tag).name}
            </StyledTileTag>
          ))}
        </StyledTileTags>
      ) : (
          <StyledTileTags>
            {genresId.map((genre) => (
              <StyledTileTag key={genre["name"]}>{genre["name"]}</StyledTileTag>
            ))}
          </StyledTileTags>
        )}
    </>
  );
};

export default TileTags;
