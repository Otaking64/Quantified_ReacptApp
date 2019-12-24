import React from "react";
import AppliedRoute from "./components/AppliedRoute";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import StepOverview from "./steps/StepOverview";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <Route path="/login" exact component={Login} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <Route path="/step1" exact component={Step1} />
      <AppliedRoute path="/step1" exact component={Step1} appProps={appProps} />
      <Route path="/step2" exact component={Step2} />
      <AppliedRoute path="/step2" exact component={Step2} appProps={appProps} />
      <Route path="/step3" exact component={Step3} />
      <AppliedRoute path="/step3" exact component={Step3} appProps={appProps} />
      <Route path="/step4" exact component={Step4} />
      <AppliedRoute path="/step4" exact component={Step4} appProps={appProps} />
      <Route path="/step5" exact component={Step5} />
      <AppliedRoute path="/step5" exact component={Step5} appProps={appProps} />
      <Route path="/step6" exact component={Step6} />
      <AppliedRoute path="/step6" exact component={Step6} appProps={appProps} />
      <Route path="/stepview" exact component={StepOverview} />
      <AppliedRoute path="/stepview" exact component={StepOverview} appProps={appProps} />

      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
