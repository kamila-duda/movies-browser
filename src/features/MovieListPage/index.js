import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import React, { useEffect } from "react";
import Pagination from "common/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGenres,
  fetchPopularMovies,
  selectCurrentPage,
  selectLoading,
  selectMovies,
} from "features/moviesSlice";
import Spinner from "features/Spinner";
import { StyledLink } from "./styled";
import { toMovieDetails } from "routes";

const MovieListPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage)
  
 
  const baseURL = "http://image.tmdb.org/t/p/w500";
  const movies = useSelector(selectMovies);
  console.log(movies)
  useEffect(() => {
    dispatch(fetchPopularMovies());
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
            <StyledLink to={toMovieDetails}>
            <Tile
              key={movie.id}
              poster={`${baseURL}${movie.poster_path}`}
              header={movie.title}
              subheader={movie.release_date}
              tags={movie.genre_ids}
              voteAverage={movie.vote_average}
              review={movie.vote_count}
            />
            </StyledLink>
          ))}
        />
      )}
      {loading ? "" : <Pagination />}
    </Container>
  );
};

export default MovieListPage;
