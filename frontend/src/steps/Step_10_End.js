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
      <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
      <Grid container direction="column" alignContent="center" alignItems="center" justify= "center">
        <Grid item xs={12}>
          <Box width={300} align="center">
            <Typography variant="overline">Progress</Typography>
            <LinearProgress variant="determinate" value={10}/>
          </Box>
        </Grid>
        <Grid item align="center">
          <div className={classes.alignItemsAndJustifyContent}>
            <Typography variant="h3">All done!</Typography>
            <Typography variant="subtitle1">The system is ready to be used</Typography>
          </div>
        </Grid>
        <Grid className={classes.button} align="center" item xs={12}>
            <LinkContainer to="/step2">
              <Box pt={1}>
                <Button size="large" variant="containedSecondary" color="primary">START HERE</Button>
              </Box>
            </LinkContainer>
          </Grid>
        </Grid>
      </Container>
  );
}
