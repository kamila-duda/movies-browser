import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import Pagination from "common/Pagination";
import {
  fetchPopularMovies,
  selectCurrentPage,
  selectTotalPages,
  selectLoading,
  selectIsError,
  selectFavoriteMovie,
  increaseCurrentPage,
  decreaseCurrentPage,
  setCurrentPageFirst,
  setCurrentPageLast,
  selectResults,
  toggleFavoriteMovies,
  selectMovies,
} from "features/moviesSlice";
import nonePoster from "assets/images/png/nonePoster.png";
import Spinner from "features/Spinner";
import { StyledDiv, StyledFontAwesomeIcon } from "./styled";
import { useQueryParameter } from "hooks/useQueryParameter";
import { key } from "features/Search/searchQueryParameter";
import ConnectionErrorPage from "common/ConnectionErrorPage";
import SearchingErrorPage from "common/SearchingErrorPage";
import UpButton from "common/UpButton";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

const FavoriteMovies = () => {
  const query = useQueryParameter(key);
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const lastPage = useSelector(selectTotalPages);
  const images = "http://image.tmdb.org/t/p/";
  const favoriteMovie = useSelector(selectFavoriteMovie);
  const movies = useSelector(selectMovies);
  const results = useSelector(selectResults);
  const posterSize = "w500";
  const title = "Your favorite movies";
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
  }
  if (results === 0 && query) {
    return (
      <Container>
        <SearchingErrorPage query={query} />
      </Container>
    );
  }
  return (
    <Container>
      <UpButton />
      {loading ? (
        query ? (
          <Tiles title={`Search results for ${query}`} body={<Spinner />} />
        ) : (
          <Tiles title="Please waiting..." body={<Spinner />} />
        )
      ) : (
        <Tiles
          title={query ? `Search results for "${query}" (${results})` : title}
          body={
            query
              ? movies.map((movie) => (
                  <StyledDiv>
                    <Tile
                      movieId={movie.id}
                      key={movie.id}
                      poster={
                        movie.poster_path === null
                          ? nonePoster
                          : `${images}${posterSize}${movie.poster_path}`
                      }
                      header={movie.title}
                      subheader={
                        movie.release_date
                          ? movie.release_date.substring(0, 4)
                          : ""
                      }
                      tags={movie.genre_ids}
                      voteAverage={movie.vote_average}
                      review={movie.vote_count}
                    />
                    <StyledFontAwesomeIcon
                      onClick={() => dispatch(toggleFavoriteMovies(movie))}
                      icon={
                        favoriteMovie.find((fav) => fav.id === movie.id)
                          ? fasFaHeart
                          : farFaHeart
                      }
                    />
                  </StyledDiv>
                ))
              : favoriteMovie.map((movie) => (
                  <StyledDiv>
                    <Tile
                      movieId={movie.id}
                      key={movie.id}
                      poster={
                        movie.poster_path === null
                          ? nonePoster
                          : `${images}${posterSize}${movie.poster_path}`
                      }
                      header={movie.title}
                      subheader={
                        movie.release_date
                          ? movie.release_date.substring(0, 4)
                          : ""
                      }
                      tags={movie.genre_ids}
                      voteAverage={movie.vote_average}
                      review={movie.vote_count}
                    />
                    <StyledFontAwesomeIcon
                      onClick={() => dispatch(toggleFavoriteMovies(movie))}
                      icon={
                        favoriteMovie.find((fav) => fav.id === movie.id)
                          ? fasFaHeart
                          : farFaHeart
                      }
                    />
                  </StyledDiv>
                ))
          }
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

export default FavoriteMovies;
