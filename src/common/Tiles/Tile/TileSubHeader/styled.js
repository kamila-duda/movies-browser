import styled, { css } from "styled-components";

export const StyledTileSubHeader = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.color.stormGray}; 
    font-weight: 400;

    ${({ detailsPage }) =>
    detailsPage &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xlarge};
      color: ${({ theme }) => theme.color.black}; 
    `}

    ${({ details }) =>
    details &&
    css`
      margin-top:0px;
      margin-bottom:8px;
      font-size: ${({ theme }) => theme.fontSize.medium}; 
    `}
`;

export const StyledDetails = styled.span`
    margin-left:12px;
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.black}; 
`;
