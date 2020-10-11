import styled from "styled-components";

export const StyledLabel = styled.label`
  width: 30%;
  height: 40px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.mystic};
  border-radius: 33px;
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    margin: 5px;
    flex-grow: 1;
  }
`;
export const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 15px;
`;
export const StyledInput = styled.input`
  background-color: none;
  border: none;
  font-size: 16px;
  flex-grow: 0.8;
  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    font-size: 13px;
  }
`;
