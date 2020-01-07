import React from "react";
import "../containers/Home.css";
import {
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import TopMenuBar from "../components/TopMenuBar";

export default function Step6(){
  return(
    <Container>
      <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item>
          <Typography variant="h4" align="center">Nodes</Typography>
          <Typography display="block" variant="body1">
          Choose the amount of nodes you have
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
