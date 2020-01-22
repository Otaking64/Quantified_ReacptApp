import React, { useState } from "react";
import "./Installation.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, MobileStepper, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import TopMenuBar from "../components/TopMenuBar";

import Step1 from "../steps/Step_1_Welcome";
import Step2 from "../steps/Step_2_Box";
import Step3 from "../steps/Step_3_Gateway";
import Step4 from "../steps/Step_4_Gateway_PowerSupply";
import Step5 from "../steps/Step_5_Gateway_LAN";
import Step6 from "../steps/Step_6_Node_Amount";
import Step7 from "../steps/Step_7_Node_Add";
import Step8 from "../steps/Step_8_Node_PositionMount";
import Step9 from "../steps/Step_9_End";
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
  const steps = [<Step1/>, <Step2/>, <Step3/>, <Step4/>, <Step5/>, <Step6/>, <Step7/>, <Step8/>, <Step9/>];

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const hadleExit = () => {
    props.history.push('/');
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
            activeStep+1 == steps.length ?
              <Button size="small" onClick={hadleExit} style={{color:'green'}}>
                Exit
              </Button>
            :
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
