import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import React, { useEffect } from "react";
import Pagination from "common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectPeople } from "features/peopleSlice";
import { selectLoading } from "features/peopleSlice";
import Spinner from "features/Spinner";

const PeopleListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopularPeople());
  }, []);
  const peopleList = true;
  const baseURL = "http://image.tmdb.org/t/p/w500";
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
            <Tile
              key={person.id}
              poster={`${baseURL}${person.profile_path}`}
              header={person.name}
            />
          ))}
        />
      )}
      {loading ? "" : <Pagination />}
    </Container>
  );
};

export default PeopleListPage;
