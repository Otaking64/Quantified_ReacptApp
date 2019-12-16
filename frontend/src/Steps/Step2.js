import React from "react";
import "../containers/Home.css";
import {Button} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap"
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import {red} from '@material-ui/core/colors'



export default function Step2() {
  return (
    <div className="Step1">
      <div className="lander">
        <h1>Stap 2</h1>
        <LinkContainer to="/step1">
          <Button variant="contained" color='primary'>Back</Button>
        </LinkContainer>
      </div>
    </div>
  );
}
