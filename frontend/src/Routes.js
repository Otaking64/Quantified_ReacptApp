import React from "react";
import AppliedRoute from "./components/AppliedRoute";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NodeInfo from "./containers/NodeInfo";
import Installation from "./containers/Installation";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <Route path="/login" exact component={Login} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <Route path="/nodeInfo/:nodeId" exact component={NodeInfo} />
      <AppliedRoute path="/nodeInfo/:nodeId" exact component={NodeInfo} appProps={appProps} />
      <Route path="/installation" exact component={Installation} />
      <AppliedRoute path="/installation" exact component={Installation} appProps={appProps} />

      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
