import React from "react";
import "../containers/Home.css";
import {Button, CssBaseline, Checkbox, FormGroup, FormControlLabel, Typography, Grid, Box, LinearProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { LinkContainer } from "react-router-bootstrap";
import Image from '../img/dog.jpg';
import LinearBar from '../components/ProgressBar.js';

const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    bottom: 20,
    position: 'fixed',
    margin: 0,
  }
}))

export default function Step1() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="column" alignContent="center" alignItems="center" justify= "center">
        <Grid item xs={12}>
          <LinearBar value={"40"} />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.alignItemsAndJustifyContent}>
            <Typography variant="h4">Welcome</Typography>
          </div>
        </Grid>
        <Grid className={classes.button} align="center" item xs={12}>
            <LinkContainer to="/step2">
              <Box pt={1}>
                <Button size="large" variant="containedSecondary" color="primary">DONE</Button>
              </Box>
            </LinkContainer>
              <LinkContainer to="/">
                <Box p={1}>
                  <Button size="small" color="primary">Previous step</Button>
                </Box>
              </LinkContainer>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
