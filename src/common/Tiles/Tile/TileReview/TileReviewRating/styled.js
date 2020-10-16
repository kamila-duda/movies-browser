import styled, { css } from "styled-components";

export const StyledTileReviewRating = styled.p`
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-weight: 600;
    margin-right: 12px;

    ${({ detailsPage }) =>
    detailsPage &&
    css`
      margin-bottom:8px;
      font-weight:500;
      font-size: ${({ theme }) => theme.fontSize.xlarge};
    `}
`;

export const ReviewRatingScale = styled.span`
    display:none;

    ${({ detailsPage }) =>
    detailsPage &&
    css`
      display:inline;
      font-weight:400;
      font-size: ${({ theme }) => theme.fontSize.small}; 
      margin-left:8px;
    `}
`;
