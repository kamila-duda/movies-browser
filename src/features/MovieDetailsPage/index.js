import React, { useEffect } from "react";
import HeroBanner from "common/HeroBanner";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import peoplePoster from "assets/images/png/posterPeople.png";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieCredits,
  selectCast,
  selectMovie,
  setMovieId,
} from "features/moviesSlice";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
	dispatch(fetchMovieCredits())
	dispatch(setMovieId
		(id));
  }, [dispatch]);
  const movie = useSelector(selectMovie);

  const baseURL = "http://image.tmdb.org/t/p/w500";
  const backdropURL = "http://image.tmdb.org/t/p/original";
  const casts = useSelector(selectCast);
  const people = [
    {
      poster: peoplePoster,
      header: "Liu Yifei",
    },
    {
      poster: peoplePoster,
      header: "Liu Yifei",
    },
    {
      poster: peoplePoster,
      header: "Liu Yifei",
    },
    {
      poster: peoplePoster,
      header: "Liu Yifei",
    },
    {
      poster: peoplePoster,
      header: "Liu Yifei",
    },
    {
      poster: peoplePoster,
      header: "Liu Yifei",
    },
    {
      poster: peoplePoster,
      header: "Liu Yifei",
    },
  ];

  return (
    <>
      <HeroBanner
        backdrop={`${backdropURL}${movie.backdrop_path}`}
        movieTitle={movie.title}
        vote_average={movie.vote_average}
        vote={movie.vote_count}
      />
      <Container detailsPage={true}>
        <Tile
          horizontal={"horizontal"}
          poster={`${baseURL}${movie.poster_path}`}
          detailsTitle={movie.title}
          detailsYear={movie.release_date}
          detailsReleaseDate={movie.release_date}
          tags={movie.genre_ids}
          detalReview={movie.vote_count}
          description={movie.overview}
        />

        <Tiles
          peopleList={true}
          title="Cast"
          body={casts.map((cast) => (
            <Tile
              peopleList={true}
              poster={cast.profile_path}
              header={cast.name}
              subheader={cast.character}
            />
          ))}
        />

        <Tiles
          peopleList={true}
          title="Crew"
          body={people.map((person) => (
            <Tile
              peopleList={true}
              poster={person.poster}
              header={person.header}
              subheader={"Mulan"}
            />
          ))}
        />
      </Container>
    </>
  );
};

export default MovieDetailsPage;
