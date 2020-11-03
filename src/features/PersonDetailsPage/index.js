import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Container from "common/Container";
import Tiles from "common/Tiles";
import Tile from "common/Tiles/Tile";
import nonePoster from "assets/images/png/nonePoster.png";
import noneProfile from "assets/images/png/noneProfile.png";
import {
  fetchPersonDetails,
  selectLoading,
  selectPerson,
  selectPersonCast,
  selectPersonCrew,
  selectIsError,
} from "features/peopleSlice";
import {
  fetchMovieDetails,
  selectFavoriteMovie,
  toggleFavoriteMovies,
} from "features/moviesSlice";
import {
  StyledDiv,
  StyledFontAwesomeIcon,
  StyledLink,
} from "features/MovieListPage/styled";
import { toMovieDetails } from "routes";
import ConnectionErrorPage from "common/ConnectionErrorPage";
import Spinner from "features/Spinner";
import { useQueryParameter } from "hooks/useQueryParameter";
import { key } from "features/Search/searchQueryParameter";
import UpButton from "common/UpButton";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

const PersonDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const loading = useSelector(selectLoading);
  const isError = useSelector(selectIsError);
  const images = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";
  const personCast = useSelector(selectPersonCast);
  const personCrew = useSelector(selectPersonCrew);

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonDetails(id));
    }
  }, [dispatch, id]);

  const query = useQueryParameter(key);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();

  useEffect(() => {
    if (query) {
      history.push(`/people?${searchParams.toString()}`);
    }
  }, [query, history, searchParams]);

  const favoriteMovie = useSelector(selectFavoriteMovie);

  if (isError) {
    return (
      <Container>
        <ConnectionErrorPage pageType="people" />
      </Container>
    );
  }
  if (loading) {
    return (
      <Container>
        <Tiles title="Search results for person details" body={<Spinner />} />
      </Container>
    );
  }
  return (
    <>
      <Container detailsPage={true} peopleDetails={true}>
        <UpButton />
        <Tile
          horizontal={"horizontal"}
          poster={
            person.profile_path === null
              ? noneProfile
              : `${images}${posterSize}${person.profile_path}`
          }
          detailsTitle={person.name}
          placeOfBirth={person.place_of_birth}
          birthday={person.birthday}
          description={
            person.biography
              ? person.biography
              : "This actor has not biography yet."
          }
        />
        <Tiles
          peopleList={false}
          title="Movies - cast"
          body={personCast.map((movie) => (
            <StyledDiv key={movie.title}>
              <Tile
                movieId={movie.id}
                key={`${movie.id} as ${movie.character}`}
                peopleList={false}
                poster={
                  movie.poster_path === null
                    ? nonePoster
                    : `${images}${posterSize}${movie.poster_path}`
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
              <StyledFontAwesomeIcon
                onClick={() => dispatch(toggleFavoriteMovies(movie))}
                icon={
                  favoriteMovie.find((fav) => fav.id === movie.id)
                    ? fasFaHeart
                    : farFaHeart
                }
              />
            </StyledDiv>
          ))}
        />
        {personCrew.length > 0 ? (
          <Tiles
            peopleList={false}
            title="Movies - crew"
            body={personCrew.map((movie) => (
              <StyledLink
                key={`${movie.id} as ${movie.job}`}
                to={toMovieDetails({ id: movie.id })}
                onClick={() => dispatch(fetchMovieDetails(movie.id))}
              >
                <Tile
                  key={movie.imdb_id}
                  peopleList={true}
                  poster={
                    movie.poster_path === null
                      ? nonePoster
                      : `${images}${posterSize}${movie.poster_path}`
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
