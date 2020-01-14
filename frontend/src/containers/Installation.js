import React, { useState } from "react";
import "./Installation.css";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, MobileStepper, Button } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";

import Step_1_Welcome from "../steps/Step_1_Welcome";
import Step_2_Box from "../steps/Step_2_Box";
import Step_3_Gateway from "../steps/Step_3_Gateway";
import Step_4_Gateway_PowerSupply from "../steps/Step_4_Gateway_PowerSupply";
import Step_5_Gateway_LAN from "../steps/Step_5_Gateway_LAN";
import Step_6_Node_Amount from "../steps/Step_6_Node_Amount";
import Step_7_Node_Grid from "../steps/Step_7_Node_Grid";
import Step_8_Node_Add from "../steps/Step_8_Node_Add";
import Step_9_Node_PositionMount from "../steps/Step_9_Node_PositionMount";
import Step_10_End from "../steps/Step_10_End";

const useStyles = makeStyles(theme => ({
  progressContainer: {
    bottom: 0,
    position: 'fixed',
    margin: 0,
    width: '100%',
    left: 0
  },
}));

export default function Installation() {
  const classes = useStyles();
  const theme = useTheme();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [<Step_1_Welcome/>, <Step_2_Box/>, <Step_3_Gateway/>, <Step_4_Gateway_PowerSupply/>, <Step_5_Gateway_LAN/>, <Step_6_Node_Amount/>, <Step_7_Node_Grid/>, <Step_8_Node_Add/>, <Step_9_Node_PositionMount/>, <Step_10_End/>];

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
