import React from "react";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import { useSelector } from "react-redux";
import {
  selectImages,
} from "features/configurationSlice";
import noneProfile from "assets/images/png/noneProfile.png";
import { useParams } from "react-router-dom";
import { selectPerson } from "features/peopleSlice";

const PersonDetailsPage = () => {
  const { id } = useParams();
  const person = useSelector(selectPerson);
  const images = useSelector(selectImages);
  const posterSize = "w500";
  return (
    <>
      <Container detailsPage={true}>
        <Tile
          horizontal={"horizontal"}
          poster={`${images["base_url"]}/${posterSize}${person.profile_path}`}
          detailsTitle={person.name}
        />

        <Tiles
          peopleList={true}
          title="Movies - cast"
          body={""}
        />

      </Container>
    </>
  );
};

export default PersonDetailsPage;
