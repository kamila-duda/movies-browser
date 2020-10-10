import styled, { css } from "styled-components";

export const StyledTilesContainer = styled.div`
    display: grid;
    grid-gap: 24px; 
    grid-template-columns: repeat(4, minmax(324px, 1fr));
    justify-content: center;
    height: auto;
    margin-top: 214px;

    ${({ horizontal }) =>
    horizontal &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    `}

    @media (max-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: repeat(3, 1fr);
  }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        grid-template-columns: 1fr;
  }
  
`;

