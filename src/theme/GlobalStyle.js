import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
} 
body{
  background-color: ${({ theme }) => theme.color.mercury};
  font-family: 'Poppins', sans-serif;
}
`;
