import React, {Component} from "react";
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
  LinearProgress
} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap"
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {red} from '@material-ui/core/colors'
import RouterImage from '../img/router.jpg'



export default function Step3(){
  return(
    <Grid container direction="column" alignItems="center" justify= "center">
      <Grid item xs={12}>
        <Box width={300} align="center">
          <Typography variant="overline">Progress</Typography>
          <LinearProgress variant="determinate" value={100}/>
        </Box>
      </Grid>
      <Grid align="center" item xs={12}>
        <img src={RouterImage}
             width="320w"
        />
        <Typography variant="h4">Nodes</Typography>
        <div>
          <LinkContainer to="/step6">
            <Box pt={1}>
              <Button size="large" variant="containedSecondary" color="primary">DONE</Button>
              </Box>
          </LinkContainer>
        </div>
        <div>
          <LinkContainer to="/step4">
            <Box p={1}>
              <Button size="small" color="primary">Previous step</Button>
            </Box>
          </LinkContainer>
        </div>
      </Grid>
    </Grid>
  );
}
