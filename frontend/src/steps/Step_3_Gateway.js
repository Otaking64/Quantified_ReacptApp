import React from "react";
import "../containers/Home.css";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
}));

export default function Step3(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item className={classes.section1}>
          <Typography variant="h3" align="center">Gateway</Typography>
        <Typography display="block" variant="body1">
          The gateway is needed to connect the nodes to the system. In the following steps we will setup the gateway for use.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
