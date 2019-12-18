import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, IconButton, FormControlLabel, FormGroup, MenuItem, Menu } from '@material-ui/core';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { PersonAdd as PersonAddIcon, Home as HomeIcon, Menu as MenuIcon, AccountBox as AccountBoxIcon } from '@material-ui/icons';
import { ContactSupport as ContactSupportIcon, Dashboard as DashboardIcon } from '@material-ui/icons';

import { LinkContainer } from "react-router-bootstrap";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import { typography } from '@material-ui/system';
import { Auth } from "aws-amplify";
import "./App.css";
import Routes from "./Routes";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: 20
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    width: 24,
    height: 24
  },
  bottomNavigation: {

  },
}));

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
  const classes = useStyles();
  const [state, setState] = React.useState({
    sideMenu: false,
  });
  const [value, setValue] = React.useState(0);

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, sideMenu: open });
  };

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

  const sideList = side => (
    <div
     className={classes.list}
     role="presentation"
     onClick={toggleDrawer(false)}
     onKeyDown={toggleDrawer(false)}
    >
      <List>
        <LinkContainer to="/signup">
          <ListItem button key="Signup">
            <ListItemIcon><PersonAddIcon /></ListItemIcon>
            <ListItemText primary="Signup" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <ListItem button key="Login">
            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </LinkContainer>
      </List>
      <Divider />
      <List>
        <LinkContainer to="/">
          <ListItem button key="Home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </LinkContainer>
      </List>
    </div>
  );

  return (
  !isAuthenticating &&
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          {isAuthenticated
          ? <IconButton color="inherit" onClick={handleLogout}>Login</IconButton>
          : <>
          <div>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon className={classes.icon}/>
            </IconButton>
            <Drawer anchor="right" open={state.sideMenu} onClose={toggleDrawer(false)}>
              {sideList('right')}
            </Drawer>
          </div>
          </>
        }
        </Toolbar>
      </AppBar>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.bottomNavigation}
      >
        <LinkContainer to="/profile">
          <BottomNavigationAction className={classes.bottombarText} label="Profile" icon={<AccountBoxIcon className={classes.icon} />} />
        </LinkContainer>
        <LinkContainer to="/dashboard">
          <BottomNavigationAction label="Dashboard" icon={<DashboardIcon className={classes.icon} />} />
        </LinkContainer>
        <LinkContainer to="/faq">
          <BottomNavigationAction label="FAQ" icon={<ContactSupportIcon className={classes.icon} />} />
        </LinkContainer>
      </BottomNavigation>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  <MuiThemeProvider theme={theme}>
  <div className="App container">
    <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
  </div>
  </MuiThemeProvider>
  );
}

export default withRouter(App);
