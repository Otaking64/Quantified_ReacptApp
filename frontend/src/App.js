import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import { typography } from '@material-ui/system';
import { Auth } from "aws-amplify";
import "./App.css";
import Routes from "./Routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#c2dff2',
      main: '#599AD5',
      dark: '#314d83',
      contrastText: '#fff',
    },
    secondary:{
      main: '#314d83'
    }
  },
  //typography:{
    //fontFamily: 'Montserrat'
  //},
});

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push("/login");
  }

  return (
  !isAuthenticating &&
  <MuiThemeProvider theme={theme}>
  <div className="App container">
    <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
  </div>
  </MuiThemeProvider>
  );
}

export default withRouter(App);
