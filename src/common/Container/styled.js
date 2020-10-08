import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 1350px;
  margin: 40px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 10px;
  }
`;