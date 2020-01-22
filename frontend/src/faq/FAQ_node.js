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
      <TopMenuBar block pageName="Node FAQ" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/faq"/>
      <div className={classes.section1}>
        <ExpansionCard title="My node is not connecting" body="To connect your node, please make sure the gateway is connected and your LoRa network is active" />
        <ExpansionCard title="The node position is wrong" body="To see the location of your nodes, go to the nodes page on your profile" />
        <ExpansionCard title="I want to change a node position" body="This functionality is currently not supported. You can delete a node and add it on the requested position" />
        <ExpansionCard title="My nodes are not displaying data" body="It could be that the battery of the node is empty. Please contact us below." />
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
