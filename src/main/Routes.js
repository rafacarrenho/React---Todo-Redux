import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Todo from "../components/Todo/Todo";

const Routes = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/" component={Todo} />
    </Switch>
  );
};

export default Routes;
