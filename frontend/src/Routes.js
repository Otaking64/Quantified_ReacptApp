import React from "react";
import AppliedRoute from "./components/AppliedRoute";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Step1 from "./steps/Step_1_Welcome";
import Step2 from "./steps/Step_2_Box";
import Step3 from "./steps/Step_3_Box_Components";
import Step4 from "./steps/Step_4_Gateway";
import Step5 from "./steps/Step_5_Gateway_PowerSupply";
import Step6 from "./steps/Step_6_Gateway_LAN";
import Step7 from "./steps/Step_7_Node_Amount";
import Step8 from "./steps/Step_8_Node_Grid";
import Step9 from "./steps/Step_9_Node_Add";
import Step10 from "./steps/Step_10_Node_PositionMount";
import Step11 from "./steps/Step_11_End";

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
      <Route path="/step7" exact component={Step7} />
      <AppliedRoute path="/step7" exact component={Step7} appProps={appProps} />
      <Route path="/step8" exact component={Step8} />
      <AppliedRoute path="/step8" exact component={Step8} appProps={appProps} />
      <Route path="/step9" exact component={Step9} />
      <AppliedRoute path="/step9" exact component={Step9} appProps={appProps} />
      <Route path="/step10" exact component={Step10} />
      <AppliedRoute path="/step10" exact component={Step10} appProps={appProps} />
      <Route path="/step11" exact component={Step11} />
      <AppliedRoute path="/step11" exact component={Step11} appProps={appProps} />

      { /* Finally, catch all unmatched routes */ }
      <Route component={NotFound} />
    </Switch>
  );
}
