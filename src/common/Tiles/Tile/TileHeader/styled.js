import styled, { css } from "styled-components";

export const StyledTileHeader = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.xlarge};
    font-weight: 500;
    margin: 16px 0 0 0;
    line-height: 1.3;

    ${({ detailsPage }) =>
    detailsPage &&
    css`
      font-weight:600;
      font-size: ${({ theme }) => theme.fontSize.xxlarge}; 
    `}
`;
