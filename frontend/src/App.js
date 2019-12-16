import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";
import "./App.css";
import Routes from "./Routes";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    align:'center',
    fontSize: 20,
  },
}))

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const classes = useStyles();

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
  <div className="App container">
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        Home
      </Typography>
      {isAuthenticated
      ? <Button color="inherit" onClick={handleLogout}>Login</Button>
      : <>
      <LinkContainer to="/signup">
        <Button color="inherit">Signup</Button>
      </LinkContainer>
      <LinkContainer to="/login">
        <Button color="inherit">Login</Button>
      </LinkContainer>
      <LinkContainer to="/">
        <Button color="inherit">Home</Button>
      </LinkContainer>
      </>
    }
    </Toolbar>
  </AppBar>
    <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
  </div>
  );
}

export default withRouter(App);
