import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

// public pages
import Layout from "pages/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout></Layout>
    </Provider>
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
