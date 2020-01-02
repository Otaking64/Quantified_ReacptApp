import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
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
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

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

  return (
  !isAuthenticating &&
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="root">
        <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
      </div>
    </MuiThemeProvider>
  );
}

export default withRouter(App);
