import "react-app-polyfill/stable";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";

// MobX
import { Provider } from "mobx-react"
import * as stores from './mobx/store'

// public pages
import Layout from "pages/Layout";

function App() {
  return (
    <Provider {...stores}>
      <Layout></Layout>
    </Provider>
  );
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
