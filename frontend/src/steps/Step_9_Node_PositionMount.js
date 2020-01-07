import React from "react";
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';

export default function Step9(){
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item>
          <Typography variant="h4" align="center">Nodes</Typography>
          <Typography display="block" variant="body1">
          Verify the position of the node
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
