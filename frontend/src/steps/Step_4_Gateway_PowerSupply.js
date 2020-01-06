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

export default function Step4(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item>
          <Typography variant="h4" align="center">Gateway</Typography>
          <Typography display="block" variant="body1">
            Use the following steps to power on the gateway:
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">

          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
