import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography, IconButton, FormControlLabel, FormGroup, MenuItem, Menu } from '@material-ui/core';
import { Drawer, Button, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { PersonAdd as PersonAddIcon, Home as HomeIcon, Menu as MenuIcon, AccountBox as AccountBoxIcon, ExitToApp as ExitToAppIcon } from '@material-ui/icons';
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
    padding: '56px 0',
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
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex : 99
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
     color="primary"
    >
      <List>
        <LinkContainer to="/profile">
          <ListItem button key="Profile">
            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </LinkContainer>
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
        <LinkContainer to="/logout">
          <ListItem button key="Logout">
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </LinkContainer>
      </List>
      <Divider />
      <List>
        <LinkContainer to="/">
          <ListItem button key="Nodes">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Nodes" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/dashboard">
          <ListItem button key="Dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/faq">
          <ListItem button key="FAQ">
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/step1">
          <ListItem button key="Step1">
            <ListItemIcon><ContactSupportIcon /></ListItemIcon>
            <ListItemText primary="Step1" />
          </ListItem>
        </LinkContainer>
      </List>
    </div>
  );

  return (
  !isAuthenticating &&
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar>
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
          className={classes.stickToBottom}
        >
          <LinkContainer to="/">
            <BottomNavigationAction label="Nodes" icon={<HomeIcon className={classes.icon} />} />
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
    </MuiThemeProvider>
  );
}

export default withRouter(App);
