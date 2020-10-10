import styled from "styled-components";

export const StyledTileProduction = styled.li`
    & .tile__production {
        color: ${({ theme }) => theme.color.black};
    }
`;
