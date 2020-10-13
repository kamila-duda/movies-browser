import styled from "styled-components";

export const StyledTilePoster = styled.img`
  max-width: 100%;
  object-fit: cover;
  height: 434px;
  @media (max-width: ${({ theme }) => theme.media.smartfon}) {
    height: 169px;
  }
`;
