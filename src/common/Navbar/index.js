import React from "react";
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

const Navigation = () => {
  return (
    <StyledNavbar>
      <StyledNavWrapper>
        <StyledNav>
          <StyledIcon src={camera} />
          <StyledTitle>Movie Browser</StyledTitle>
          <NavigationList>
            <NavigationListItem>
              <StyledNavLink to={toMoviesList()}>Movies</StyledNavLink>
            </NavigationListItem>
            <NavigationListItem>
              <StyledNavLink to={toPeopleList()}>People</StyledNavLink>
            </NavigationListItem>
          </NavigationList>
        </StyledNav>
        <Search />
      </StyledNavWrapper>
    </StyledNavbar>
  );
};

export default Navigation;
