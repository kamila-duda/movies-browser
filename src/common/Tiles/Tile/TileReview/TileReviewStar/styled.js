import styled, { css } from "styled-components";

export const StyledTileReviewStar = styled.img`
    max-width: 100%;
    object-fit: contain;
    margin-top: -2px;
    margin-right: 12px;

    ${({ detailsPage }) =>
    detailsPage &&
    css`
      margin-top: 5px;
    `}
`;
