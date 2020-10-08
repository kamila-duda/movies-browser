import React from "react";
import {
  NavigationList,
  NavigationListItem,
  StyledIcon,
  StyledNavbar,
  Link,
  StyledNavWrapper,
  StyledNav,
  StyledTitle,
} from "./styled";
import camera from "../../images/Video.svg";
import Search from "../../features/Search";

const Navigation = () => {
  return (
    <StyledNavbar>
      <StyledNavWrapper>
        <StyledNav>
          <StyledIcon src={camera} />
          <StyledTitle>Movie Browser</StyledTitle>
          <NavigationList>
            <NavigationListItem>
              <Link>Movies</Link>
            </NavigationListItem>
            <NavigationListItem>
              <Link>People</Link>
            </NavigationListItem>
          </NavigationList>
        </StyledNav>
        <Search />
      </StyledNavWrapper>
    </StyledNavbar>
  );
};

export default Navigation;
