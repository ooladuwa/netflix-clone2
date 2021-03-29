import React from "react";
import { render } from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import "normalize.css";
import { firebase } from "./lib/firebase.prod";

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
