import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
