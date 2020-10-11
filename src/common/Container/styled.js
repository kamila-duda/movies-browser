import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 1350px;
  padding-top: 90px;
  margin: auto;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-top: 140px;
  }
`;
