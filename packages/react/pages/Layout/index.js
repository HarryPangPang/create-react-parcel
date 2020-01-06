import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router,Switch, Route, HashHistory, Link } from 'react-router-dom';
import HelloWorld from "pages/HelloWorld";
export default function App() {
    return (
          <Router>
             <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/HelloWorld">HelloWorld</Link>
                </li>
              </ul>
      
              <Switch>
                <Route path="/HelloWorld">
                  <HelloWorld />
                </Route>
              </Switch>
            </div>
          </Router>
    )
}


var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);