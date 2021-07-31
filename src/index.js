import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
  rootElement
);
