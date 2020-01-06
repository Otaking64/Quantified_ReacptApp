import React from "react";
import "../containers/Home.css";
import {
  Button,
  Container,
  Typography,
  Grid,
  Box,
  LinearProgress,
  makeStyles,
} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";

const useStyles = makeStyles(theme => ({
  avatarColor:{
    backgroundColor:'#fff',
  },
}))

export default function Step3(){
  const classes = useStyles()
  return(
    <Container>
      <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item>
          <Typography variant="h4" align="center">Gateway</Typography>
          <Typography display="block" variant="body1">
          In the box are the following items:
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
