import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "common/HeroBanner";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import {
  fetchMovieDetails,
  selectCast,
  selectCrew,
  selectMovie,
  selectMovieProduction,
  selectLoading,
  selectIsError
} from "features/moviesSlice";
import { fetchPersonDetails } from "features/peopleSlice";
import noneProfile from "assets/images/png/noneProfile.png";
import { StyledLink } from "features/MovieListPage/styled";
import { toPersonDetails } from "routes";
import ConnectionErrorPage from "common/ConnectionErrorPage";
import Spinner from "features/Spinner";

const MovieDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);
  const images = "http://image.tmdb.org/t/p/";
  const posterSize = "w500";
  const backdropSize = "original";
  const cast = useSelector(selectCast);
  const crew = useSelector(selectCrew);
  const movieProduction = useSelector(selectMovieProduction);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id));
    }
  }, [id]);

  if (isError) {
    return (
      <Container>
        <ConnectionErrorPage pageType="movies" />
      </Container>
    )
  };
  if (loading) {
    return (
      <Container>
        <Tiles title="Search results for movie details" body={<Spinner />} />
      </Container>
    )
  };
  return (
    <>
      <HeroBanner
        backdrop={`${images}${backdropSize}${movie.backdrop_path}`}
        movieTitle={movie.title}
        vote_average={movie.vote_average}
        vote={movie.vote_count}
      />
      <Container detailsPage={true}>
        <Tile
          horizontal={"horizontal"}
          poster={`${images}${posterSize}${movie.poster_path}`}
          detailsTitle={movie.title}
          // detailsYear={movie.release_date.substring(0, 4)}
          detailsProduction={movieProduction === [] ? "" : movieProduction}
          detailsReleaseDate={movie.release_date}
          genresId={movie.genres}
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
              onClick={() => dispatch(fetchPersonDetails(person.id))}
            >
              <Tile
                peopleList={true}
                poster={
                  person.profile_path === null
                    ? noneProfile
                    : `${images}${posterSize}${person.profile_path}`
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
                  : `${images}${posterSize}${crewmate.profile_path}`
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
