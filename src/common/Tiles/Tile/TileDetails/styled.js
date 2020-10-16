import styled from "styled-components";

export const StyledTileDetails= styled.ul`
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.stormGray};
    list-style: none;
    font-weight: 300;
    line-height: 1.6;
    padding: 0;
`;
export const StyledTileRelease = styled.li`
    & .tile__release {
        color: ${({ theme }) => theme.color.black};
    }
`;