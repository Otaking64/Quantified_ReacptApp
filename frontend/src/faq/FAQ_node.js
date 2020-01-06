import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Divider,
  Typography,
} from '@material-ui/core';
import ExpansionCard from '../components/ExpansionPanel.js';
import TopMenuBar from '../components/TopMenuBar.js'


const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <Container fixed>
      <TopMenuBar block pageName="Node FAQ" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
      <div className={classes.section1}>
        <ExpansionCard title="Hello" body="None" />
        <ExpansionCard title="Hello2" body="None2" />
      </div>
        <Divider variant="middle" />
      <Box className={classes.section1}>
        <Typography variant="h6">Hello</Typography>
      </Box>
    </Container>
  );
}
