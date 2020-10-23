import styled from "styled-components";

export const StyledTileTags = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  list-style: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  margin: 16px 0px 0px 0px;
  padding: 0 0 20px 0;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
  }
`;
export const StyledTileTag = styled.li`
  font-weight: 400;
  padding: 8px 16px;
  margin: 0px 8px 8px 0px;
  background-color: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    padding: 4px 8px;
    margin: 0px 2px 2px 0px;
  }
`;
