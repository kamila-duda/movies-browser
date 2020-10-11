import styled from "styled-components";

export const StyledTileTags = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.small};
    margin: 0;
    padding: 0 0 20px 0;
`;

