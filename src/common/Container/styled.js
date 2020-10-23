import styled, { css } from "styled-components";

export const StyledContainer = styled.main`
  max-width: 1368px;
  padding-top: 90px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    padding-top: 140px;
  }

  ${({ detailsPage }) =>
    detailsPage &&
    css`
      padding-top: 64px;

      @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
        padding-top: 16px;
      }
    `}
`;
