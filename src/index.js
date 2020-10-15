import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <ThemeProvider theme={theme}>
        <GlobalStyle />
          <App />
      </ThemeProvider>
     </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

