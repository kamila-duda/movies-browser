import styled from "styled-components";

export const StyledSpinner = styled.img`
  width: 91px;
  height: 91px;
  animation: rotation 2s infinite linear;
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
