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
  selectIsError,
} from "features/peopleSlice";
import { selectLoading } from "features/peopleSlice";
import { StyledLink } from "features/MovieListPage/styled";
import { toPersonDetails } from "routes";
import { useQueryParameter } from "features/Search/queryParameter";
import { key } from "features/Search/searchQueryParameter";
import ConnectionErrorPage from "common/ConnectionErrorPage";
import noneProfile from "assets/images/png/noneProfile.png";
import SearchingErrorPage from "common/SearchingErrorPage";
import { selectResults } from "features/peopleSlice";

const PeopleListPage = () => {
  const query = useQueryParameter(key);
  const people = useSelector(selectPeople);
  const dispatch = useDispatch();
  const images = "http://image.tmdb.org/t/p/";
  const posterSize = "w500";
  const title = "Popular people";
  const results = useSelector(selectResults);
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectTotalPages);
  const peopleList = true;

  useEffect(() => {
    dispatch(fetchPopularPeople({ currentPage, query }));
  }, [dispatch, currentPage, query]);

  if (isError) {
    return (
      <Container>
        <ConnectionErrorPage pageType="people" />
      </Container>
    )
  };
  if (results===0 && query) {
    return (
      <Container>
        <SearchingErrorPage query={query} />
      </Container>
    );
  };

  return (
    <Container>
      {loading ? (query? (<Tiles title={`Search results for ${query}`} body={<Spinner />} />) : 
      <Tiles title="Search results for popular people" body={<Spinner />} />
      ) : (
          <Tiles
            peopleList={peopleList}
            title={query? `Search results for "${query}" (${results})` : title}
            body={people.map((person) => (
              <StyledLink
                key={person.id}
                to={toPersonDetails({ id: person.id })}
                onClick={() => dispatch(fetchPersonDetails(person.id))}
              >
                <Tile
                  key={person.name}
                  poster={
                    person.profile_path === null
                      ? noneProfile
                      : `${images}${posterSize}${person.profile_path}`
                  }
                  header={person.name}
                />
              </StyledLink>
            ))}
          />
        )}
      {loading ? (
        ""
      ) : (
          <Pagination
            currentPage={currentPage}
            lastPage={lastPage}
            setCurrentPageFirst={setCurrentPageFirst}
            decreaseCurrentPage={decreaseCurrentPage}
            increaseCurrentPage={increaseCurrentPage}
            setCurrentPageLast={setCurrentPageLast}
          />
        )}
    </Container>
  );
};

export default PeopleListPage;
