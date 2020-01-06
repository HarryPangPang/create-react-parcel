import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from "react";
import ReactDOM from "react-dom";
import Layout from 'pages/Layout'
function App(){
  return(
    <Layout></Layout>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);