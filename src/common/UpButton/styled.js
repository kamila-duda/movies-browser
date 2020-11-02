import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: fixed;
  right: 40px;
  bottom: 40px;
  font-size: 80px;
  font-weight: 600;
  z-index: 100;
  cursor: pointer;
  color: ${({ theme }) => theme.color.blue};
  animation: up 2s infinite linear;

  @keyframes up {
      0% {bottom: 40px; opacity: 1};
      100% {bottom: 70px; opacity: 0}
  }

  ${({ hide }) => hide && css`
        display: none;
    `}
    @media (max-width: ${({ theme }) => theme.media.extraMobile}) {
    display: none;
  }
`;
