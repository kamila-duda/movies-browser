import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import Pagination from "common/Pagination";
import { fetchData, selectConfigurationParameters, selectResults } from "features/moviesSlice";

const MovieListPage = () => {
  const popularMovies = useSelector(selectResults);
  const dispatch = useDispatch();
  const images = useSelector(selectConfigurationParameters);
  const posterSize = "w500";


  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const generatePopularMoviesList = () => {
    if (popularMovies) {
      return (
        popularMovies.map((movie) => (
          <Tile
            key={movie.id}
            poster={`${images["base_url"]}/${posterSize}${movie.poster_path}`}
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
