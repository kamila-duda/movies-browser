import React from "react";
import Container from "common/Container";
import Tile from "common/Tiles/Tile";
import Tiles from "common/Tiles";
import personPicture from "features/PersonDetailsPage/images/danzel-washington.jpg";
import personMoviePoster from "features/PersonDetailsPage/images/the-equalizer.jpg";

const PersonDetailsPage = () => {
  const personDetails = {
    picture: personPicture,
    name: "Danzel Washington",
    dateOfBirth: "25.08.1987",
    placeOfBirth: "Wuhan, Hubei, China",
    description: "Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th",
  };

  const moviesCast = {
    movies: [
      { 
        title: "The Equalizer",
        poster: personMoviePoster,
      }
    ]
  };

  const moviesCrew = {
    movies: [
      { 
        role: "The Equalizer",
        poster: personMoviePoster,
        production: "2020",
      },
    ]
  };

  return (
    <Container>
      {/* Horizontal card */}
      <Tile 
        horizontal
        poster={personDetails.picture} 
        header={personDetails.name} 
        details={personDetails.dateOfBirth} 
        details={personDetails.placeOfBirth}
        description={personDetails.description}
      />
      {/* Movies cast */}
      <Tiles 
        title="Movies - cast"
        body={
          <Tile 
            poster={moviesCast.movies[0].poster} 
            header={moviesCast.movies[0].title}
          />}
      />
      {/* Movies crew */}
      <Tiles 
        title="Movies - crew"
        body={
          <Tile 
            poster={moviesCrew.movies[0].poster} 
            header={moviesCrew.movies[0].role}
            details={moviesCrew.movies[0].production}
          />}
      />
    </Container>
  );
};

export default PersonDetailsPage;
