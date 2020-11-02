import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  justify-content: center;
  padding: 10px;
  z-index: 100;
`;
export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1350px;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const StyledNav = styled.div`
 
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const StyledIcon = styled.img`
  height: 23px;
  width: 30px;
  margin: 0 10px;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    width: 14px;
    height: 14px;
  }
`;
export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -1.5px;
  margin: 0;
  display: flex;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: 13px;
    flex-grow: 1;
  }
`;
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  width: max-content;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    padding: 0;
  }
`;
export const NavigationListItem = styled.li`
  flex-grow: 0;
  margin: 15px 5px;
  @media (max-width: ${({ theme }) => theme.media.extraMobileSmall}) {
    margin: 15px 0px;
  }
`;
export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    box-sizing: border-box;
    border-radius: 24px;
  }
  ${({ favorite }) =>
    favorite &&
    css`
      position: relative;
      padding: 10px 20px;
    `}
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: 12px;
  }
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.color.red};
`;
export const StyledNumberContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 10px;
`;
