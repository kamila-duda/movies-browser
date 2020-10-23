import styled, { css } from "styled-components";

export const StyledTileReview = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 0;
  flex-grow: 1;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    align-items: center;
  }
`;
export const StyledTileReviewUserRatings = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.color.stormGray};
  font-weight: 400;

  ${({ detailsPage }) =>
    detailsPage &&
    css`
      margin-top: 28px;
      margin-bottom: 8px;
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.color.black};
    `}
    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
  }
`;
export const StyledTileReviewRating = styled.p`
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 600;
  margin-right: 12px;
  ${({ detailsPage }) =>
    detailsPage &&
    css`
      margin-bottom: 8px;
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xlarge};
    `}
    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
  }
`;

export const ReviewRatingScale = styled.span`
  display: none;
  ${({ detailsPage }) =>
    detailsPage &&
    css`
      display: inline;
      font-weight: 400;
      font-size: ${({ theme }) => theme.fontSize.small};
      margin-left: 8px;
    `}
`;
export const StyledTileReviewStar = styled.img`
  width: 20px;
  object-fit: contain;
  margin-top: -2px;
  margin-right: 12px;
  margin-bottom: 16px;

  ${({ detailsPage }) =>
    detailsPage &&
    css`
      margin-top: 5px;
    `}
    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
      margin: -2px 5px 0 0;
  width: 10%;
  }
`;
