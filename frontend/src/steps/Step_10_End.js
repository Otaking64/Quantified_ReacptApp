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
  alignItemsAndJustifyContent: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  avatarColor:{
    backgroundColor:'#fff',
  },
}))

export default function Step10(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignContent="center" alignItems="center" justify= "center">
        <Grid item align="center">
          <div className={classes.alignItemsAndJustifyContent}>
            <Typography variant="h3">All done!</Typography>
            <Typography variant="subtitle1">The system is ready to be used</Typography>
          </div>
        </Grid>
      </Grid>
      </Container>
  );
}
