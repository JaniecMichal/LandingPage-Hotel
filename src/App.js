import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import AboutUS from "./views/AboutUS";
import Homepage from "./views/Homepage";
import { toAboutSection } from "./routes.js";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={toAboutSection()}>
          <AboutUS />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
