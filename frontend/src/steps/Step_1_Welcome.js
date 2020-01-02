import React from "react";
import "../containers/Home.css";
import {
  Button,
  Container,
  Box,
  Fade,
  Typography,
  Grid,
  LinearProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { LinkContainer } from "react-router-bootstrap";
import LinearBar from '../components/ProgressBar.js';
import TopMenuBar from "../components/TopMenuBar";

const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  button: {
    bottom: 20,
    position: 'fixed',
    margin: 0,
  },
}))

export default function Step1() {
  const classes = useStyles()
  return (
    <Container>
      <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
      <Grid container direction="column" alignContent="center" alignItems="center" justify= "center">
        <Grid item xs={12}>
          <Box width={300} align="center">
            <Typography variant="overline">Progress</Typography>
            <LinearProgress variant="determinate" value={10}/>
          </Box>
        </Grid>
        <Grid item xs={12} align="center">
          <div className={classes.alignItemsAndJustifyContent}>
          <Fade in="true">
            <Typography variant="h3">Welcome</Typography>
          </Fade>
            <Typography variant="subtitle1">Let's get started</Typography>
          </div>
        </Grid>
        <Grid className={classes.button} align="center" item xs={12}>
            <LinkContainer to="/step2">
              <Box pt={1}>
                <Button size="large" variant="containedSecondary" color="primary">START HERE</Button>
              </Box>
            </LinkContainer>
          </Grid>
        </Grid>
      </Container>
    );
  }
