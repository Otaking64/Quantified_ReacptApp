import React, { useState } from "react";
import "./Installation.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, MobileStepper, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import TopMenuBar from "../components/TopMenuBar";

import step_1_Welcome from "../steps/Step_1_Welcome";
import step_2_Box from "../steps/Step_2_Box";
import step_3_Gateway from "../steps/Step_3_Gateway";
import step_4_Gateway_PowerSupply from "../steps/Step_4_Gateway_PowerSupply";
import step_5_Gateway_LAN from "../steps/Step_5_Gateway_LAN";
import step_6_Node_Amount from "../steps/Step_6_Node_Amount";
import step_7_Node_Grid from "../steps/Step_7_Node_Grid";
import step_8_Node_Add from "../steps/Step_8_Node_Add";
import step_9_Node_PositionMount from "../steps/Step_9_Node_PositionMount";
import step_10_End from "../steps/Step_10_End";
import firebase from "firebase";

const useStyles = makeStyles(theme => ({
  progressContainer: {
    bottom: 0,
    position: 'fixed',
    margin: 0,
    width: '100%',
    left: 0,
  },
}));

export default function Installation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User is signed in");

    } else {
      console.log("User is not signed in");
      props.history.push("/login")
    }
  });
  const steps = [<step_1_Welcome/>, <step_2_Box/>, <step_3_Gateway/>, <step_4_Gateway_PowerSupply/>, <step_5_Gateway_LAN/>, <step_6_Node_Amount/>, <step_7_Node_Grid/>, <step_8_Node_Add/>, <step_9_Node_PositionMount/>, <step_10_End/>];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Container>
      <TopMenuBar block pageName="" faqButton={true} hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
      {steps[activeStep]}
      <div className={classes.progressContainer}>
        <MobileStepper
          variant="progress"
          steps={steps.length}
          position="static"
          elevation="8"
          activeStep={activeStep}
          className={classes.ProgressBar}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === (steps.length-1)}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    </Container>
  );
}
