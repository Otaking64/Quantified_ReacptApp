import React from "react";
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';

export default function Step8(){
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item>
          <Typography variant="h4" align="center">Nodes</Typography>
          <Typography display="block" variant="body1">
          Add the node to the system
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
