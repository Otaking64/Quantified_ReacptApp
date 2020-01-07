import React from "react";
import "../containers/Home.css";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';

export default function Step5(){
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item>
          <Typography variant="h4" align="center">Gateway</Typography>
          <Typography display="block" variant="body1">
          Connecting the gateway to the internet
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
