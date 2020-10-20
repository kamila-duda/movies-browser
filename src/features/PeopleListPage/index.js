import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import Pagination from "common/Pagination";
import Spinner from "features/Spinner";
import {
  fetchPopularPeople,
  selectCurrentPage,
  selectPeople,
  selectTotalPages,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
  fetchPersonDetails,
} from "features/peopleSlice";
import { selectLoading } from "features/peopleSlice";
import { selectImages } from "features/configurationsSlice";
import { StyledLink } from "features/MovieListPage/styled";
import { toPersonDetails } from "routes";

const PeopleListPage = () => {
  const people = useSelector(selectPeople);
  const dispatch = useDispatch();
  const images = useSelector(selectImages);
  const posterSize = "w500";
  const title = "Popular people";
  const loading = useSelector(selectLoading);
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectTotalPages);
  const peopleList = true;

  useEffect(() => {
    dispatch(fetchPopularPeople({ payload: currentPage }));
  }, [dispatch, currentPage]);

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
 {loading ? "" :
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          setCurrentPageFirst={setCurrentPageFirst}
          decreaseCurrentPage={decreaseCurrentPage}
          increaseCurrentPage={increaseCurrentPage}
          setCurrentPageLast={setCurrentPageLast}
        />
      }
    </Container>
  );
};

export default PeopleListPage;
