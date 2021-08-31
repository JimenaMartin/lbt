import React from "react";
import { ThemeProvider } from "@material-ui/core";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./theme";
import { AppGlobalStyles } from "./theme/AppGlobalStyles";

WebFont.load({
  google: {
    families: ["Roboto:100,300,400,500,700,900"],
  },
});

const rootComponent = (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppGlobalStyles />
        <App />
      </React.Fragment>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(rootComponent, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
