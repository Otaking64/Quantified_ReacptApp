import React from "react";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
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
        <Grid item className={classes.section1}>
          <Typography variant="h3" align="center">Nodes</Typography>
          <Typography display="block" variant="body1">
          Verify the position of the node
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
