import React from "react";
import "../containers/Home.css";
import {
  Button,
  Checkbox,
  FormLabel,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  FormControl,
  Typography,
  Grid,
  Box,
  LinearProgress,
  makeStyles,
  Container,
} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap"
import RouterImage from '../img/router.jpg'

const useStyles = makeStyles(theme => ({
  button: {
    bottom: 20,
    position: 'fixed',
    margin: 0,
  }
}))

export default function Step3(){
  const classes = useStyles()
  return(
    <Container maxWidth="sm">
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item sm={12}>
          <Box width={300} align="center">
            <Typography variant="overline">Progress</Typography>
            <LinearProgress variant="determinate" value={66}/>
          </Box>
        </Grid>
        <Grid item xs={12}>
            <img src={RouterImage}
                 width="320w"
                 />
          <Typography variant="h4">Gateway</Typography>
          <Typography variant="body1">Are the following items in the box?</Typography>
          <FormGroup column text-align="left">
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedA"
                  inputProps={{ 'aria-label': 'Checkbox A' }}
                  color="primary"
                />
              }
                label="Gateway"
            />
            <FormControlLabel
            control={
              <Checkbox
                value="checkedA"
                inputProps={{ 'aria-label': 'Checkbox A' }}
                color="primary"
              />
            }
              label="Requirement 2"
          />
          </FormGroup>
          </Grid>
          <Grid item xs={12} align="center" className={classes.button}>
            <LinkContainer to="/step4">
              <Box>
                <Button size="large" variant="containedSecondary" color="primary">DONE</Button>
              </Box>
            </LinkContainer>
            <LinkContainer to="/step2">
              <Box>
                <Button size="small" color="primary">Previous step</Button>
              </Box>
            </LinkContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
