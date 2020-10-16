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
