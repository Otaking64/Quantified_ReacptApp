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

export default function FAQnode() {
  const classes = useStyles();

  return (
    <Container>
      <TopMenuBar block pageName="Node FAQ" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/faq"/>
      <div className={classes.section1}>
        <ExpansionCard title="The gateway is not powering on" body="Please make sure you have a active connection to the internet, a connection to yoir power outlet and the prepared network settings. If this does not work, please contact us below." />
        <ExpansionCard title="The gateway is on but not connected to the internet" body="Make sure you have setup your local network for the gateway. Is this not working? Please contact us below." />
        <ExpansionCard title="The gateway is connected but is not sending data to the application" body="The gateway uses the LoRa network to communicate with the nodes. Try to see if your local LoRa network is online. Is this not the case? Please contact us below." />
        <ExpansionCard title="The gateway making a strange noise" body="This could mean you have a broken gateway. Please contact us below" />
    </div>

      <Divider variant="middle"/>
      <Box m={1}>
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
      </Box>
    </Container>
  );
}
