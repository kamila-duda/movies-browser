import styled, { css } from "styled-components";

export const StyledTile = styled.div`
  max-width: 324px;
  display: flex;
  flex-direction: column;
  padding: 16px 16px 5px 16px;
  justify-content: flex-start;
  background-color: white;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  ${({ people }) =>
    people &&
    css`
      justify-content:center;
      align-items:center;
    `}

  ${({ horizontal }) =>
    horizontal &&
    css`
      max-width:100%;
      display: grid;
      grid-template-columns: 312px 1fr;
      grid-gap:40px;
      align-items:center;
      margin-bottom:49px;
    `}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display:flex;
    flex-direction: column;
  }
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
      margin-top:0px;
      margin-bottom:8px;
      font-size: ${({ theme }) => theme.fontSize.medium}; 
    `}
`;
export const TileInnerWrapper = styled.div`
  margin: 0;
  padding: 0;
 
  ${({ people }) =>
    people &&
    css`
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    `}

  ${({ flex }) =>
    flex &&
    css`
      max-width:100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      @media (max-width: ${({ theme }) => theme.media.desktop}) {
      flex-grow:1;
  }
    `}
`;
export const StyledTilePoster = styled.img`
  max-width: 100%;
  object-fit: cover;
  height: 434px;
  @media (max-width: ${({ theme }) => theme.media.smartfon}) {
    height: 169px;
  }
  ${({ people }) =>
    people &&
    css`
      height: 265px;
      @media (max-width: ${({ theme }) => theme.media.smartfon}) {
        height: 178px;
      }
    `}
`;
export const StyledDetails = styled.span`
    margin-left:12px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.black}; 
`;
