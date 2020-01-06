import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashHistory,
  Link
} from "react-router-dom";
import Home from "pages/Home";

export default class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Home">HelloWorld</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }
}
