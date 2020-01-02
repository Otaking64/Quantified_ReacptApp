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

export default function Step3(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item xs={12}>
          <Box width={300} align="center">
            <Typography variant="overline">Progress</Typography>
            <LinearProgress variant="determinate" value={30}/>
          </Box>
        </Grid>
        <Grid item className={classes.button} align="center">
          <LinkContainer to="/step4">
            <Box pt={1}>
              <Button size="large" variant="containedSecondary" color="primary">DONE</Button>
            </Box>
          </LinkContainer>
          <LinkContainer to="/step2">
            <Box p={1}>
              <Button size="small" color="primary">Previous step</Button>
            </Box>
          </LinkContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
