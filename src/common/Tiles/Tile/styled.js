import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledTile = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 5px 16px;
  justify-content: flex-start;
  background-color: white;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  ${({ horizontal }) =>
    horizontal &&
    css`
      max-width: 100%;
      display: grid;
      grid-template-columns: 312px 1fr;
      grid-gap: 40px;
      margin-top: 20px;
      margin-bottom: 49px;
    `}
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    margin: 0px;
    width: 100%;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  ${({ people }) =>
    people &&
    css`
      @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
        margin: 0px;
        width: 100%;
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;
        align-items: center;
      }
    `}
`;
export const StyledTileSubHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.color.stormGray};
  font-weight: 400;
  ${({ detailsPage }) =>
    detailsPage &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xlarge};
      color: ${({ theme }) => theme.color.black};
    `}

  ${({ details }) =>
    details &&
    css`
      margin-top: 0px;
      margin-bottom: 8px;
      font-size: ${({ theme }) => theme.fontSize.medium};
    `}
    ${({ people }) =>
    people &&
    css`
      text-align: center;
    `}
    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.xSmall};
  }
`;
export const StyledTileHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  font-weight: 500;
  margin: 16px 0 0 0;
  line-height: 1.3;

  ${({ detailsPage }) =>
    detailsPage &&
    css`
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.xxlarge};
    `}
  ${({ people }) =>
    people &&
    css`
      text-align: center;
      word-break: break-word;
    `}
    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.normal};
  }
`;
export const TileInnerWrapper = styled.div`
  margin: 0;
  padding: 0;

  ${({ people }) =>
    people &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: center;
    `}

  ${({ flex }) =>
    flex &&
    css`
      max-width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-grow: 1;

      @media (max-width: ${({ theme }) => theme.media.desktop}) {
        flex-grow: 1;
      }
    `}
`;
export const StyledMobileWrapper = styled.div`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  @media (min-width: ${({ theme }) => theme.media.extraMobile}) {
    display: none;
  }
`;
export const StyledTilePoster = styled.img`
  width: 100%;
  object-fit: contain;
  height: 434px;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    height: 200px;
  }
  ${({ people }) =>
    people &&
    css`
      height: 265px;
      @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
        height: 178px;
      }
    `}
`;
export const StyledDetails = styled.span`
  margin-left: 12px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.color.black};
`;
export const StyledTileDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 400;
  margin: 16px 0 0 0;
  line-height: 1.3;
  text-align: justify;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    display: none;
  }
`;
export const StyledMobileDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 400;
  margin: 16px 0 0 0;
  line-height: 1.3;
  text-align: justify;
`;
export const StyledMoreButton = styled.p`
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.color.scienceBlue};
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    display: none;
  }
`;
export const StyledMoreButtonMobile = styled.p`
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.color.scienceBlue};
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  position: relative;
  color: ${({ theme }) => theme.color.black};
  width: 100%;
`;
