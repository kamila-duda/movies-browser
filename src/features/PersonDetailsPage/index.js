import React from "react";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import { useDispatch, useSelector } from "react-redux";
import { selectImages } from "features/configurationSlice";
import nonePoster from "assets/images/png/nonePoster.png";
import { useParams } from "react-router-dom";
import {
  selectPerson,
  selectPersonCast,
  selectPersonCrew,
  selectPersonDetails,
} from "features/peopleSlice";
import { fetchMovieDetails } from "features/moviesSlice";
import { StyledLink } from "features/MovieListPage/styled";
import { toMovieDetails } from "routes";

const PersonDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const images = useSelector(selectImages);
  const posterSize = "w500";
  const personCast = useSelector(selectPersonCast);
  const personCrew = useSelector(selectPersonCrew);
  const personDetails = useSelector(selectPersonDetails);
  return (
    <>
      <Container detailsPage={true}>
        <Tile
          horizontal={"horizontal"}
          poster={`${images["base_url"]}/${posterSize}${person.profile_path}`}
          detailsTitle={person.name}
          placeOfBirth={personDetails.place_of_birth}
          birthday={personDetails.birthday}
          description={personDetails.biography}
        />

        <Tiles
          peopleList={true}
          title="Movies - cast"
          body={personCast.map((movie) => (
            <StyledLink
              key={movie.id}
              to={toMovieDetails({ id: movie.id })}
              onClick={() => dispatch(fetchMovieDetails(movie))}
            >
              <Tile
                peopleList={true}
                poster={
                  movie.poster_path === null
                    ? nonePoster
                    : `${images["base_url"]}/${posterSize}${movie.poster_path}`
                }
                header={movie.title}
                subheader={`${movie.character} (${
                  movie.release_date
                    ? movie.release_date.substring(0, 4)
                    : "year not found"
                })`}
                tags={movie.genre_ids}
                voteAverage={movie.vote_average}
                review={movie.vote_count}
              />
            </StyledLink>
          ))}
        />
        {personCrew.length > 0 ? (
          <Tiles
            peopleList={true}
            title="Movies - crew"
            body={personCrew.map((movie) => (
              <StyledLink
                key={movie.id}
                to={toMovieDetails({ id: movie.id })}
                onClick={() => dispatch(fetchMovieDetails(movie))}
              >
                <Tile
                  peopleList={true}
                  poster={
                    movie.poster_path === null
                      ? nonePoster
                      : `${images["base_url"]}/${posterSize}${movie.poster_path}`
                  }
                  header={movie.title}
                  subheader={movie.character}
                />
              </StyledLink>
            ))}
          />
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default PersonDetailsPage;
