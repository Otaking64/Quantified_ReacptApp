import React from "react";
import "../containers/Home.css";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
} from '@material-ui/core';
import TopMenuBar from "../components/TopMenuBar";

export default function Step4(){
  return(
    <Container>
      <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item>
          <Typography variant="h4" align="center">Gateway</Typography>
          <Typography display="block" variant="body1">
            Use the following steps to power on the gateway:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Typography variant="h4" align="center">Gateway</Typography>
            <Typography display="block" variant="body1">
              Use the following steps to power on the gateway:
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
