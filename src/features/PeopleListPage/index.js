import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import React from "react";
import peoplePoster from "assets/images/png/posterPeople.png";
import Pagination from "common/Pagination";

const PeopleListPage = () => {
  const people = {
    poster: peoplePoster,
    header: "Liu Yifei",
  };
  console.log(people.poster);
  return (
    <Container>
      <Tiles
        peopleList={true}
        title="Popular people"
        body={<Tile poster={people.poster} header={people.header} />}
      />
      <Pagination />
    </Container>
  );
};

export default PeopleListPage;
