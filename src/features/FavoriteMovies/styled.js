import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.color.black};
  width: 100%;
`;
export const StyledDiv = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  cursor: pointer;
  z-index: 10;
  color: ${({ theme }) => theme.color.red};
  @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    font-size: 20px;
  }
`;
