import React from "react";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core';
import TopMenuBar from "../components/TopMenuBar";
import firebase from 'firebase';
import ChartTemp from './ChartTemp'
import NodeTable from './nodeTable'
import FakeTemp from '../components/fakeTemp'

//dashboard template, loads all the dashboard components into it
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    height: 240
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default function Dashboard(props) {
  //check if user is signed in
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed in");

      } else {
        console.log("User is not signed in");
        props.history.push("/login")
      }
  });

  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div className={classes.root}>
      <CssBaseline />
    <TopMenuBar block pageName="Dashboard" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                  <ChartTemp />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>
                <Box p={1}>
                  <Typography variant="h6" component="h2">Current temperature</Typography>
                  <Typography variant="h2"><FakeTemp />℃</Typography>
                  <Divider className={classes.divider}/>
                  <Typography variant="h6">Advice</Typography>
                  <Typography variant="body2">Temperature is too high</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={fixedHeightPaper}>
                  <Box p={1}>
                    <Typography variant="h6" component="h2">Light strenght</Typography>
                    <Typography variant="h2">8000 lux</Typography>
                    <Divider className={classes.divider}/>
                    <Typography variant="h6">Advice</Typography>
                    <Typography variant="body2">Light is optimal</Typography>
                  </Box>
                </Paper>
              </Grid>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                <Box p={1}>
                  <NodeTable />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
    </div>

    );
  }
