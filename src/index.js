import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
  rootElement
);
