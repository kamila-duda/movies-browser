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
  selectMovies,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
} from "features/moviesSlice";
import { selectImages } from "features/configurationsSlice"
import Spinner from "features/Spinner";
import { StyledLink } from "./styled";
import { toMovieDetails } from "routes";

const MovieListPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectTotalPages);
  const images = useSelector(selectImages);
  const movies = useSelector(selectMovies);
  const posterSize = "w500";
  useEffect(() => {
    dispatch(fetchPopularMovies({ payload: currentPage }));
  }, [dispatch, currentPage]);

  const title = "Popular movies";
  const loading = useSelector(selectLoading);
  return (
    <Container>
      {loading ? (
        <Tiles title="Search results for ..." body={<Spinner />} />
      ) : (
        <Tiles
          title={title}
          body={movies.map((movie) => (
            <StyledLink
              key={movie.id}
              to={toMovieDetails}
              onClick={() => dispatch(fetchMovieDetails(movie))}
            >
              <Tile
                key={movie.id}
                poster={`${images["base_url"]}/${posterSize}${movie.poster_path}`}
                header={movie.title}
                subheader={movie.release_date.substring(0, 4)}
                tags={movie.genre_ids}
                voteAverage={movie.vote_average}
                review={movie.vote_count}
              />
            </StyledLink>
          ))}
        />
      )}

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

export default MovieListPage;
