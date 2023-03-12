import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { BooksContextProvider } from "./store/Books.context";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BooksContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BooksContextProvider>,

  document.getElementById("root")
);
