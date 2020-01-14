import React from "react";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  Fade
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  section1: {
    margin: theme.spacing(3, 2),
  },
}));

export default function Step9(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Fade in="true" style={{ transitionDelay:'200ms' }}>
          <Grid item className={classes.section1}>
            <Typography variant="h3" align="center">Nodes</Typography>
            <Typography display="block" variant="body1">
              Verify the position of the node
            </Typography>
          </Grid>
        </Fade>
      </Grid>
    </Container>
  );
}
