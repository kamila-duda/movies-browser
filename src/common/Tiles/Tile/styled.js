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

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    flex-direction: row;
  }
`;

export const TileInnerWrapper = styled.div`

  ${({ horizontal }) =>
    horizontal &&
    css`
      max-width: 100%;
      flex-direction: row;
      justify-content: space-between;
    `}

`;
