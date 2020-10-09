import styled from "styled-components";

const TileSubHeader = styled.h3`
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.color.stormGray}; 
    font-weight: 400;
`;

export default TileSubHeader;