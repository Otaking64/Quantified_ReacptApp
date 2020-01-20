import React from "react";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Container,
  Box,
  Grid,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import TopMenuBar from "../components/TopMenuBar";

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
  }
}));

export default function Dashboard(props) {
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
    <TopMenuBar block pageName="Dashboard" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <Paper className={fixedHeightPaper}>
                <Box p={2}>
                  <Typography variant="h6" component="h2">Today</Typography>
                  <ChartTemp />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Box p={2}>
                  <Typography variant="h6" component="h2">Node status</Typography>

                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                  <Box p={1}>
                  </Box>
                </Paper>
              </Grid>
            <Grid item xs={6}>
              <Paper className={fixedHeightPaper}>
                <Box p={1}>
                  <NodeTable />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>

    );
  }
