import React, { useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
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
import { useQueryParameter } from "hooks/useQueryParameter";
import { key } from "features/Search/searchQueryParameter";
import nonePoster from "assets/images/png/nonePoster.png";
import UpButton from "common/UpButton";


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
  }, [dispatch, id]);

  const query = useQueryParameter(key);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();

  useEffect(() => {
    if (query) {
      history.push(`/movies?${searchParams.toString()}`);
    }
  }, [query, history, searchParams]);

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
      {movie.backdrop_path !== null ?
        (<HeroBanner
          backdrop={`${images}${backdropSize}${movie.backdrop_path}`}
          movieTitle={movie.title}
          vote_average={movie.vote_average}
          vote={movie.vote_count}
        />) : ""}
      <Container detailsPage={true}>
        <UpButton/>
        <Tile
          horizontal={"horizontal"}
          poster={movie.poster_path === null
            ? nonePoster
            : `${images}${posterSize}${movie.poster_path}`}
          detailsTitle={movie.title}
          detailsYear={
            movie.release_date ? movie.release_date.substring(0, 4) : ""
          }
          detailsProduction={movieProduction === [] ? "" : movieProduction}
          detailsReleaseDate={movie.release_date}
          genresId={movie.genres}
          voteAverage={movie.vote_average}
          review={movie.vote_count}
          description={movie.overview ? movie.overview : "This movie has not overview."}
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
                key={person.name}
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
              key={`${crewmate.name} as ${crewmate.job}`}
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
