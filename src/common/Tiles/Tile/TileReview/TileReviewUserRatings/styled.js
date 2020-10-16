import styled, { css } from "styled-components";

export const StyledTileReviewUserRatings = styled.p`
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.color.stormGray};
    font-weight: 400;

    ${({ detailsPage }) =>
		detailsPage &&
    css`
      margin-top:28px;
      margin-bottom:8px;
      font-size: ${({ theme }) => theme.fontSize.small}; 
      color: ${({ theme }) => theme.color.black};
    `}
`;
