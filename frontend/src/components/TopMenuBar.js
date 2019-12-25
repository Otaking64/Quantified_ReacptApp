import React, { useState } from "react";
import "./TopMenuBar.css";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { PersonAdd as PersonAddIcon, Home as HomeIcon, Menu as MenuIcon, AccountBox as AccountBoxIcon, ExitToApp as ExitToAppIcon } from '@material-ui/icons';
import { ContactSupport as ContactSupportIcon, Dashboard as DashboardIcon } from '@material-ui/icons';

import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";

export default function TopMenuBar({
  pageName,
  ...props
}) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [state, setState] = React.useState({
    sideMenu: false,
  });

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, sideMenu: open });
  };

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    props.history.push("/login");
  }

  const sideList = side => (
    <div
     className="slideMenu"
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
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className="topMenuTitle">
          {pageName}
        </Typography>
        {isAuthenticated
        ? <IconButton color="inherit" onClick={handleLogout}>Login</IconButton>
        : <>
        <div>
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon className="icon"/>
          </IconButton>
          <Drawer anchor="right" open={state.sideMenu} onClose={toggleDrawer(false)}>
            {sideList('right')}
          </Drawer>
        </div>
        </>
      }
      </Toolbar>
    </AppBar>
  );
}
