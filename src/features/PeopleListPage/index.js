import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import React, { useEffect } from "react";
import Pagination from "common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectPeople, fetchPersonDetails } from "features/peopleSlice";
import { selectLoading } from "features/peopleSlice";
import Spinner from "features/Spinner";
import { nanoid } from "@reduxjs/toolkit";
import { selectImages } from "features/configurationSlice";
import { StyledLink } from "features/MovieListPage/styled";
import { toPersonDetails } from "routes";

const PeopleListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, [dispatch]);
  const peopleList = true;
  const images = useSelector(selectImages);
  const posterSize = "w500";
  const people = useSelector(selectPeople);
  const title = "Popular people";
  const loading = useSelector(selectLoading);
  return (
    <Container>
      {loading ? (
        <Tiles title="Search results for ..." body={<Spinner />} />
      ) : (
        <Tiles
          peopleList={peopleList}
          title={title}
          body={people.map((person) => (
            <StyledLink
              key={person.id}
              to={toPersonDetails}
              onClick={() => dispatch(fetchPersonDetails(person))}
            >
            <Tile
              key={nanoid}
              poster={`${images["base_url"]}/${posterSize}${person.profile_path}`}
              header={person.name}
            />
            </StyledLink>
          ))}
        />
      )}
      {loading ? "" : <Pagination />}
    </Container>
  );
};

export default PeopleListPage;
