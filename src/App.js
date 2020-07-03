
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import D3 from "./components/D3"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/d3">
            <D3 />
          </Route>
          <Route path="/">
          <ul>
        
          <li>
            <Link to="/d3">d3</Link>
          </li>
        </ul>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};