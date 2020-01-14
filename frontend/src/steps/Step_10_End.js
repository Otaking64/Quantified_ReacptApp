import React from "react";
import "../containers/Home.css";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Fade
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  avatarColor:{
    backgroundColor:'#fff',
  },
}))

export default function Step10(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignContent="center" alignItems="center" justify= "center">
        <Grid item align="center">
          <div className={classes.alignItemsAndJustifyContent}>
            <Fade in="true">
              <Typography variant="h3">All done!</Typography>
            </Fade>
            <Fade in="true" style={{ transitionDelay:'200ms' }}>
              <Typography variant="subtitle1">The system is ready to be used</Typography>
            </Fade>
          </div>
        </Grid>
      </Grid>
      </Container>
  );
}
