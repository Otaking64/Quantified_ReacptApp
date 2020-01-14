import React from "react";
import "../containers/Home.css";
import { Container, Fade, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
}))

export default function Step1() {
  const classes = useStyles()
  return (
    <Container>
      <Grid container direction="column" alignContent="center" alignItems="center" justify= "center">
        <Grid item align="center">
          <div className={classes.alignItemsAndJustifyContent}>
            <Fade in="true">
              <Typography variant="h3">Welcome</Typography>
            </Fade>
            <Fade in="true" style={{ transitionDelay:'200ms' }}>
              <Typography variant="subtitle1">Let's get started</Typography>
            </Fade>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
