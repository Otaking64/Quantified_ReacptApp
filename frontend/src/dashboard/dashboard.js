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
import BottomMenuBar from '../components/BottomMenuBar';
import NodeTable from './nodeTable';
import ChartTemp from './ChartTemp';

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

export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div className={classes.root}>
      <CssBaseline />
        <TopMenuBar block pageName="Dashboard" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={false}/>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
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
      <BottomMenuBar slectedIcon={1} block/>
    </div>

    );
  }
