import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
      html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
    } 
      body {
        background-color: ${({ theme }) => theme.color.whisper};
        font-family: 'Poppins', sans-serif;
    }
`;
