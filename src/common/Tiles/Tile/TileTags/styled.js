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
export const StyledTileTag = styled.li`
  font-weight: 400;
  padding: 8px 16px;
  margin: 0px 8px 8px 0px;
  background-color: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
`;
