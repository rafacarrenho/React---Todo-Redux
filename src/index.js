import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import reducers from "./store/storeConfig";
import multi from "redux-multi";

const store = applyMiddleware(multi)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
