import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import Pagination from "common/Pagination";
import { fetchPopularMovies, selectResults } from "features/moviesSlice";
//import { getPopularMovies } from "./getPopularMovies";

const MovieListPage = () => {
  const popularMovies = useSelector(selectResults);
  console.log(popularMovies);
  const dispatch = useDispatch();
  const baseURL = "http://image.tmdb.org/t/p/w500";

  useEffect(() => {
    dispatch(fetchPopularMovies())
  }, []);

  const generatePopularMoviesList = () => {
    if (popularMovies) {
      return (
        popularMovies.map((movie) => (
          <Tile
            key={movie.id}
            poster={`${baseURL}${movie.poster_path}`}
            header={movie.title}
            subheader={movie.release_date}
            tags={movie.genre_ids}
            voteAverage={movie.vote_average}
            review={movie.vote_count}
          />
        )))
    }
    return "";
  };

  return (
    <Container>
      <Tiles
        title="Popular movies"
        body={generatePopularMoviesList()}
      />
      <Pagination />
    </Container>
  );
};

export default MovieListPage;
