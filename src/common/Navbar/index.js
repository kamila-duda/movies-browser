import React from "react";
import { useDispatch } from "react-redux";
import { toMoviesList, toPeopleList } from "routes";
import {
  NavigationList,
  NavigationListItem,
  StyledIcon,
  StyledNavbar,
  StyledNavLink,
  StyledNavWrapper,
  StyledNav,
  StyledTitle,
} from "./styled";
import camera from "assets/images/svg/Video.svg";
import Search from "features/Search";
import { fetchPopularMovies } from "features/moviesSlice";
import { fetchPopularPeople } from "features/peopleSlice";


const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <StyledNavbar>
      <StyledNavWrapper>
        <StyledNav>
          <StyledIcon src={camera} />
          <StyledTitle>Movie Browser</StyledTitle>
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
          </NavigationList>
        </StyledNav>
        <Search />
      </StyledNavWrapper>
    </StyledNavbar>
  );
};

export default Navigation;
