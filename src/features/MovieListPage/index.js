import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import React, { useEffect, useState } from "react";
import moviePoster from "assets/images/jpg/poster.jpg";
import starIcon from "assets/images/svg/star.svg";
import Pagination from "common/Pagination";
//import { getPopularMovies } from "./getPopularMovies";

const MovieListPage = () => {
  const baseURL = "http://image.tmdb.org/t/p/w500";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("/movies-browser/popularMovies.json")
      .then((response) => response.json())
      .then((response) => setMovies(response.results))
      .catch((error) => console.error(error));
  }, []);
  // const movie = {
  //   poster: moviePoster,
  //   header: "Mulan",
  //   subheader: "2020",
  //   tags: ["film", "film"],
  //   review: starIcon,
  //   description:
  //     "A young Chinese maiden disguises herself as a male warrior in order to save her father",
  // };
  //console.log(movies[9])
  return (
    <Container>
      <Tiles
        title="Popular movies"
        body={movies.map((movie) => (
          <Tile
          key={movie.id}
            poster={`${baseURL}${movie.poster_path}`}
            header={movie.title}
            subheader={movie.release_date}
            tags={movie.genre_ids}
            voteAverage={movie.vote_average}
            review={movie.vote_count}
          />
        ))}
      />
      <Pagination />
    </Container>
  );
};

export default MovieListPage;
