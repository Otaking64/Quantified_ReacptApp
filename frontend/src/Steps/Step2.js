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
  Container,
  Grid,
  Box,
  LinearProgress
} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap"
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {red} from '@material-ui/core/colors'
import RouterImage from '../img/router.jpg'
import HelpIcon from '@material-ui/icons/Help';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';



export default function Step2(){
  /*const [state, setState] = React.useState({
    r1: false,
    r2: false,
    r3: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { r1, r2, r3 } = state;
  const error = [r1, r2, r3].filter(v => v).length !== [state.length];


  return (
    <Grid container direction="column" alignItems="center" justify= "center">
    <div>

      <FormControl required error={error} component="fieldset">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={r1} onChange={handleChange('r1')} value="r1" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={r2} onChange={handleChange('r2')} value="r2" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={r3} onChange={handleChange('r3')} value="r3" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      </div>
    </Grid>*/
  return(
    <Container maxWidth="sm">
      <Grid container alignItems="flex-end" justify="center" variant="column">
        <Grid item sm={12}>
          <Box width={300} align="center">
            <Typography variant="overline">Progress</Typography>
            <LinearProgress variant="determinate" value={66}/>
          </Box>
        </Grid>
        <Grid item align="center" xs={12}>
            <img src={RouterImage}
                 width="320w"
                 />
          <Typography variant="h4">Gateway</Typography>
          <Typography variant="body1">Are the following items in the box?</Typography>
          <div>
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
            <LinkContainer to="/step3">
              <Box pt={1}>
                <Button size="large" variant="containedSecondary" color="primary">DONE</Button>
              </Box>
            </LinkContainer>
          </div>
          <div>
            <LinkContainer to="/step1">
              <Box p={1}>
                <Button size="small" color="primary">Previous step</Button>
              </Box>
            </LinkContainer>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
