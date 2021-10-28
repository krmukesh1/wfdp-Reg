import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Component/Home";
import Form from "./Component/Form";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/form" component={Form} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
