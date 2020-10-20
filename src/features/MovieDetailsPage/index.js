import React from "react";
import HeroBanner from "common/HeroBanner";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCast,
  selectCrew,
  selectMovie,
  selectMovieProduction,
} from "features/moviesSlice";
import {
  fetchPersonDetails,
} from "features/peopleSlice";
import {
  selectImages,
} from "features/configurationSlice";
import noneProfile from "assets/images/png/noneProfile.png";
import { useParams } from "react-router-dom";
import { StyledLink } from "features/MovieListPage/styled";
import { toPersonDetails } from "routes";

const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const images = useSelector(selectImages);
  const posterSize = "w500";
  const backdropSize = "original";
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const movieProduction = useSelector(selectMovieProduction);
  return (
    <>
      <HeroBanner
        backdrop={`${images["base_url"]}/${backdropSize}${movie.backdrop_path}`}
        movieTitle={movie.title}
        vote_average={movie.vote_average}
        vote={movie.vote_count}
      />
      <Container detailsPage={true}>
        <Tile
          horizontal={"horizontal"}
          poster={`${images["base_url"]}/${posterSize}${movie.poster_path}`}
          detailsTitle={movie.title}
          detailsYear={movie.release_date.substring(0, 4)}
          detailsProduction={movieProduction === [] ? "" : movieProduction}
          detailsReleaseDate={movie.release_date}
          tags={movie.genre_ids}
          voteAverage={movie.vote_average}
          review={movie.vote_count}
          description={movie.overview}
        />

        <Tiles
          peopleList={true}
          title="Cast"
          body={cast.map((person) => (
            <StyledLink
              key={person.id}
              to={toPersonDetails({ id: person.id })}
              onClick={() => dispatch(fetchPersonDetails(person))}
            >
            <Tile
              peopleList={true}
              poster={
                person.profile_path === null
                  ? noneProfile
                  : `${images["base_url"]}/${posterSize}${person.profile_path}`
              }
              header={person.name}
              subheader={person.character}
            />
            </StyledLink>
          ))}
        />

        <Tiles
          peopleList={true}
          title="Crew"
          body={crew.map((crewmate) => (
            <Tile
              peopleList={true}
              poster={
                crewmate.profile_path === null
                  ? noneProfile
                  : `${images["base_url"]}/${posterSize}${crewmate.profile_path}`
              }
              header={crewmate.name}
              subheader={crewmate.job}
            />
          ))}
        />
      </Container>
    </>
  );
};

export default MovieDetailsPage;
