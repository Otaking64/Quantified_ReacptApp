import React, { useState } from "react";
import "./TopMenuBar.css";
import NodeIcon from '../icons/icon_node';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

import { ArrowBack as ArrowBackIcon, Close as CloseIcon, Home as HomeIcon, Menu as MenuIcon, AccountBox as AccountBoxIcon, ExitToApp as ExitToAppIcon } from '@material-ui/icons';
import HelpIcon from '@material-ui/icons/Help';
import BuildIcon from '@material-ui/icons/Build';

import { LinkContainer } from "react-router-bootstrap";
import { Auth } from "aws-amplify";
import firebase from "firebase";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function TopMenuBar({
  pageName,
  faqButton,
  hamburgerMenu,
  closeButtonOnly,
  closeWithPrompt,
  backButton,
  backRoutePage,
  ...props
}) {
  const classes = useStyles();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [open, setOpen] = React.useState(false);
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

    props.history.push('/login');
  }

  async function signout(){
    firebase.auth().signOut()

  }

  const handleClickExit = () => {
    setOpen(true);
  };

  const handleClosePrompt = () => {
    setOpen(false);
  };

  const sideList = side => (
    <div
     className="slideMenu"
     role="presentation"
     onClick={toggleDrawer(false)}
     onKeyDown={toggleDrawer(false)}
     color="primary"
    >
      <List>
        <LinkContainer to="/">
          <ListItem button key="Home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/profile">
          <ListItem button key="Profile">
            <ListItemIcon><AccountBoxIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/installation">
          <ListItem button key="Add nodes">
            <ListItemIcon><NodeIcon color="black"/></ListItemIcon>
            <ListItemText primary="Add nodes" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/installation">
          <ListItem button key="Installation">
            <ListItemIcon><BuildIcon color="black"/></ListItemIcon>
          <ListItemText primary="Installation" />
          </ListItem>
        </LinkContainer>
        <LinkContainer to="/faq">
          <ListItem button key="FAQ">
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="FAQ" />
          </ListItem>
        </LinkContainer>
      </List>
      <Divider />
      <List>
        <ListItem button key="Logout" onClick={signout}>
          <ListItemIcon><ExitToAppIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>

    </div>
  );

  return (
    <AppBar>
      <Toolbar>
        { backButton ?
          <LinkContainer to={backRoutePage}>
            <IconButton edge="start" className={classes.menuButton} color="inherit">
              <ArrowBackIcon className="icon"/>
            </IconButton>
          </LinkContainer>
        : closeButtonOnly ?
          <LinkContainer to="/">
            <IconButton edge="start" color="inherit">
              <CloseIcon className="icon"/>
            </IconButton>
          </LinkContainer>
        : closeWithPrompt ?
          <>
            <IconButton edge="start" color="inherit" onClick={handleClickExit}>
              <CloseIcon className="icon"/>
            </IconButton>
            <Dialog
              open={open}
              onClose={handleClosePrompt}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to leave the node installation?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <LinkContainer to="/">
                  <Button onClick={handleClosePrompt} color="primary">
                    Exit
                  </Button>
                </LinkContainer>
                <Button onClick={handleClosePrompt} color="primary" autoFocus>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </>
        : "" }
        <Typography variant="h6" className="topMenuTitle">
          {pageName}
        </Typography>
          <div>
            { hamburgerMenu ?
              <>
                <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                  <MenuIcon className="icon"/>
                </IconButton>
                <Drawer anchor="right" open={state.sideMenu} onClose={toggleDrawer(false)}>
                  {sideList('right')}
                </Drawer>
              </>
            : faqButton ?
              <LinkContainer to="/faq">
                <IconButton edge="end" color="inherit">
                  <HelpIcon className="icon"/>
                </IconButton>
              </LinkContainer>
            : "" }
          </div>
      </Toolbar>
    </AppBar>
  );
}
