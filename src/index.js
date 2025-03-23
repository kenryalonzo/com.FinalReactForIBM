import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom"; // Add this line

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> {/* Add this line */}
      <App />
    </BrowserRouter> {/* Add this line */}
  </Provider>,
  document.getElementById("root")
);