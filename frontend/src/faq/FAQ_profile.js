import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Typography,
  Button,
  ButtonGroup,
  Box,
  Container
} from '@material-ui/core';
import ExpansionCard from '../components/ExpansionPanel.js';
import TopMenuBar from '../components/TopMenuBar.js'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import BottomMenuBar from "../components/BottomMenuBar";
import firebase from "firebase";

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(3),
    alignItems: "center",
  },
  section3:{
    margin: theme.spacing(1)
  }
}));

export default function FAQnode(props) {
  const classes = useStyles();
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User is signed in");

    } else {
      console.log("User is not signed in");
      props.history.push("/login")
    }
  });
  return (
    <Container>
      <TopMenuBar block pageName="Node FAQ"
      hamburgerMenu={false}
      closeButtonOnly={false}
      closeWithPrompt={false}
      backButton={true}
      backRoutePage="/faq"/>
      <div className={classes.section1}>
        <ExpansionCard title="How can I change my password?" body="To change your password. Go to top right button on the homescreen > profile > change password" />
      </div>
      <Divider variant="middle"/>
      <div className={classes.section2} align="center">
        <Typography variant="h5">Problem not found?</Typography>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
          className={classes.section3}
        >
          <Button
            startIcon={<PhoneIcon />}
            href="tel:+31651775925"
          >
            Call us
          </Button>
          <Button
            startIcon={<MailIcon />}
            href="mailto:info@quantified.eu?Subject=App%20problem"
            target="_top"
          >
            Send us an email
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}
