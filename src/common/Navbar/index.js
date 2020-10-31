import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toFavoriteMovies, toMoviesList, toPeopleList } from "routes";
import {
  NavigationList,
  NavigationListItem,
  StyledIcon,
  StyledNavbar,
  StyledNavLink,
  StyledNavWrapper,
  StyledNav,
  StyledTitle,
  StyledFontAwesomeIcon,
  StyledNumberContainer,
} from "./styled";
import camera from "assets/images/svg/Video.svg";
import Search from "features/Search";
import { fetchPopularMovies, selectFavoriteMovie } from "features/moviesSlice";
import { fetchPopularPeople } from "features/peopleSlice";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovie);

  return (
    <StyledNavbar>
      <StyledNavWrapper>
        <StyledNav>
          <StyledIcon src={camera} />
          <StyledTitle>Movies Browser</StyledTitle>
          <NavigationList>
            <NavigationListItem>
              <StyledNavLink
                to={toMoviesList()}
                onClick={() => dispatch(fetchPopularMovies())}
              >
                Movies
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink
                to={toPeopleList()}
                onClick={() => dispatch(fetchPopularPeople())}
              >
                People
              </StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink favorite="favorite" to={toFavoriteMovies()}>
                <StyledFontAwesomeIcon icon={fasFaHeart} />
                <StyledNumberContainer>
                  {favoriteMovies.length>99? "99+": favoriteMovies.length}
                </StyledNumberContainer>
              </StyledNavLink>
            </NavigationListItem>
          </NavigationList>
        </StyledNav>
        <Search />
      </StyledNavWrapper>
    </StyledNavbar>
  );
};

export default Navigation;
