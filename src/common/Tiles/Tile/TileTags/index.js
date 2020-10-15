import React from "react";
import { StyledTileTag, StyledTileTags } from "./styled";
import {genres} from "genre"

const TileTags = ({ tags }) => {
    console.log(genres[0].name)
  return (
    <StyledTileTags>
      {tags.map((tag) => (
        <StyledTileTag key={tag}>{genres.find(({id})=>id===tag).name}</StyledTileTag>
      ))}
    </StyledTileTags>
  );
};

export default TileTags;
