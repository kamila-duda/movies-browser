import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import Pagination from "common/Pagination";
import {
  fetchMovieDetails,
  fetchPopularMovies,
  selectCurrentPage,
  selectTotalPages,
  selectLoading,
  selectIsError,
  selectMovies,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
  selectResults,
} from "features/moviesSlice";
import nonePoster from "assets/images/png/nonePoster.png";
import Spinner from "features/Spinner";
import { StyledLink } from "./styled";
import { toMovieDetails } from "routes";
import { useQueryParameter } from "features/Search/queryParameter";
import { key } from "features/Search/searchQueryParameter";
import ConnectionErrorPage from "common/ConnectionErrorPage";
import SearchingErrorPage from "common/SearchingErrorPage";

const MovieListPage = () => {
  const query = useQueryParameter(key);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectTotalPages);
  const images = "http://image.tmdb.org/t/p/";
  const movies = useSelector(selectMovies);
  const results = useSelector(selectResults);
  const posterSize = "w500";
  const title = "Popular movies";
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);
  useEffect(() => {
    dispatch(fetchPopularMovies({ currentPage, query }));
  }, [dispatch, currentPage, query]);
  if (isError) {
    return (
      <Container>
        <ConnectionErrorPage pageType="movies" />
      </Container>
    );
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
      {loading ? (query? (<Tiles title={`Search results for ${query}`} body={<Spinner />} />):
        <Tiles title="Search results for popular movies" body={<Spinner />} />
      ) : (
        <Tiles
          title={query? `Search results for "${query}" (${results})` : title}
          body={movies.map((movie) => (
            <StyledLink
              key={movie.id}
              to={toMovieDetails({ id: movie.id })}
              onClick={() => dispatch(fetchMovieDetails(movie.id))}
            >
              <Tile
                key={movie.id}
                poster={
                  movie.poster_path === null
                    ? nonePoster
                    : `${images}${posterSize}${movie.poster_path}`
                }
                header={movie.title}
                subheader={
                  movie.release_date ? movie.release_date.substring(0, 4) : ""
                }
                tags={movie.genre_ids}
                voteAverage={movie.vote_average}
                review={movie.vote_count}
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

export default MovieListPage;
