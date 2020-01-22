import React from "react";
import AppliedRoute from "./components/AppliedRoute";
import Login from "./auth/login";
import NotFound from "./containers/NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Nodes from "./containers/Nodes";
import NodeInfo from "./containers/NodeInfo";
import Installation from "./containers/Installation";
import Dashboard from "./dashboard/dashboard";
import FAQgeneral from "./faq/FAQ";
import FAQnode from "./faq/FAQ_node"
import FAQgateway from "./faq/FAQ_gateway"
import FAQprofile from "./faq/FAQ_profile"
import firebase, { FirebaseContext } from "firebase";
import useAuth from "./auth/useAuth";
import forgot from "./auth/forgotpass";
import Profile from './containers/Profile';


export default function Routes({ appProps }) {
    const user = useAuth()
  return (
      <div>

    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <Route path="/nodes" exact component={Nodes} />
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
      <Route path="/faq/profile" exact component={FAQprofile} />
      <AppliedRoute path="/faq/profile" exact component={FAQprofile} appProps={appProps} />
      <Route path="/faq/gateway" exact component={FAQgateway} />
      <AppliedRoute path="/faq/gateway" exact component={FAQgateway} appProps={appProps} />
    <Route path="/profile" exact component={Profile} />
  <AppliedRoute path="/profile" exact component={Profile} appProps={appProps} />
      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>

          </div>
  );
}
