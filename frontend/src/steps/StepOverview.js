import React from "react";
import "../containers/Home.css";
import {Button, Checkbox, Card, CardActions, CardContent, FormGroup, FormControlLabel, Typography, Grid, Box, LinearProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { LinkContainer } from "react-router-bootstrap";
import Image from '../img/dog.jpg';
import LinearBar from '../components/ProgressBar.js';

const useStyles = makeStyles(theme => ({
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    bottom: 20,
    position: 'fixed',
    margin: 0,
  }
}))

export default function Step1() {
  const classes = useStyles()
  return (
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Set up the gateway
          </Typography>
        <CardActions>
          <LinkContainer to="/step1">
            <Button size="small">Install gateway</Button>
          </LinkContainer>
        </CardActions>
        </CardContent>
      </Card>
    );
  }
