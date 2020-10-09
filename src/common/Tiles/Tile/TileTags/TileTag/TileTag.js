import styled from "styled-components";

const TileTag = styled.li`
    font-weight: 400;
    padding: 8px 16px;
    margin: 0px 8px 8px 0px;
    background-color: ${({ theme }) => theme.color.mystic};
    border-radius: 5px; 
`;

export default TileTag;