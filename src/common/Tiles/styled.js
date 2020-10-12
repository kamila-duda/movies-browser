import styled, { css } from "styled-components";

export const StyledTilesContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, minmax(324px, 1fr));
  justify-items: center;
  height: auto;
  padding: 15px;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-template-columns: 1fr;
  }
  ${({ people }) =>
    people &&
    css`
      grid-template-columns: repeat(6, minmax(208px, 1fr));
      @media (max-width: ${({ theme }) => theme.media.tablet}) {
        grid-template-columns: repeat(4, 1fr);
      }
      @media (max-width: ${({ theme }) => theme.media.mobile}) {
        grid-template-columns: repeat(2, 1fr);
      }
    `}
`;
export const StyledTitle = styled.h2`
  font-size: 36px;
  font-weight: 600;
  justify-self: start;
  grid-column: 1 / -1;
`;
