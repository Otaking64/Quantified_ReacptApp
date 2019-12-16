import React from "react";
import "../containers/Home.css";
import {Button, Checkbox, FormGroup, FormControlLabel, Typography, Grid, Box} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap";
import Image from '../img/dog.jpg';



export default function Step1() {
  return (
    <Grid container direction="column" alignItems="center" justify= "center">
      <Grid item xs={12}>
          <FormGroup column>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedA"
                  inputProps={{ 'aria-label': 'Checkbox A' }}
                  color="primary"
                />
              }
                label="Requirement"
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
        <Grid align="center" item xs={12}>
          <div>
            <LinkContainer to="/step2">
              <Box pt={1}>
                <Button size="large" variant="containedSecondary" color="primary">Next</Button>
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
    );
  }
