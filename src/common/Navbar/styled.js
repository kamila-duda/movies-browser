import styled from "styled-components";

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
`;
export const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 1350px;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const StyledNav = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    width: 60%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const StyledIcon = styled.img`
  height: 23px;
  width: 30px;
  margin: 0 10px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
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
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
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
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0;
  }
`;
export const NavigationListItem = styled.li`
  padding: 10px;
  flex-grow: 0;
  margin: 10px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 29px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  &.active {
    border: 1px solid ${({ theme }) => theme.color.white};
    box-sizing: border-box;
    border-radius: 24px;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 12px;
  }
`;
