import React from "react";
import AppliedRoute from "./components/AppliedRoute";
import Login from "./auth/login";
import NotFound from "./containers/NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NodeInfo from "./containers/NodeInfo";
import Installation from "./containers/Installation";
import Dashboard from "./dashboard/dashboard";
import FAQgeneral from "./faq/FAQ";
import FAQnode from "./faq/FAQ_node"
import firebase, { FirebaseContext } from "firebase";
import useAuth from "./auth/useAuth";
import forgot from "./auth/forgotpass"

export default function Routes({ appProps }) {
    const user = useAuth()
  return (
      <div>

    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <Route path="/login" exact component={Login} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
        <Route path="/forgotpassword" exact component={forgot} />
        <AppliedRoute path="/forgotpassword" exact component={forgot} appProps={appProps} />
      <Route path="/nodeInfo/:nodeId" exact component={NodeInfo} />
      <AppliedRoute path="/nodeInfo/:nodeId" exact component={NodeInfo} appProps={appProps} />
      <Route path="/installation" exact component={Installation} />
      <AppliedRoute path="/installation" exact component={Installation} appProps={appProps} />
      <Route path="/dashboard" exact component={Dashboard} />
      <AppliedRoute path="/dashboard" exact component={Dashboard} appProps={appProps} />
    <Route path="/faq" exact component={FAQgeneral} />
    <AppliedRoute path="/faq" exact component={FAQgeneral} appProps={appProps} />
  <Route path="/faq/node" exact component={FAQnode} />
<AppliedRoute path="/faq/node" exact component={FAQnode} appProps={appProps} />

      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>

          </div>
  );
}
