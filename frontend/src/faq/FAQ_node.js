import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Divider,
  Typography,
  Button,
  ButtonGroup
} from '@material-ui/core';
import ExpansionCard from '../components/ExpansionPanel.js';
import TopMenuBar from '../components/TopMenuBar.js'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

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
    <Container fixed>
      <TopMenuBar block pageName="Node FAQ" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
      <div className={classes.section1}>
        <ExpansionCard title="My node is not connecting" body="To connect your node, please follow the provided steps:" />
      <ExpansionCard title="The node position is wrong" body="To see the location of your nodes, go to the nodes page on your profile" />
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
          >
            Call us
          </Button>
          <Button
            startIcon={<MailIcon />}
          >
            Send us an email
          </Button>
        </ButtonGroup>
        </div>
    </Container>
  );
}
