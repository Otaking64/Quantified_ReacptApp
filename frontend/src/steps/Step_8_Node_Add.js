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
  button: {
    bottom: 20,
    position: 'fixed',
    margin: 0,
  },
  avatarColor:{
    backgroundColor:'#fff',
  },
}))

export default function Step8(){
  const classes = useStyles()
  return(
    <Container>
      <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item xs={12}>
          <Box width={300} align="center">
            <Typography variant="overline">Progress</Typography>
            <LinearProgress variant="determinate" value={80}/>
          </Box>
        </Grid>
        <Grid item>
          <Typography variant="h4" align="center">Nodes</Typography>
          <Typography display="block" variant="body1">
          Add the node to the system
          </Typography>
        </Grid>
        <Grid item className={classes.button} align="center">
          <LinkContainer to="/step9">
            <Box pt={1}>
              <Button size="large" variant="containedSecondary" color="primary">DONE</Button>
            </Box>
          </LinkContainer>
          <LinkContainer to="/step7">
            <Box p={1}>
              <Button size="small" color="primary">Previous step</Button>
            </Box>
          </LinkContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
