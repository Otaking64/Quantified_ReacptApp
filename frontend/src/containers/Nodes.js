import React from "react";
import nodeIcon from '../icons/node.png';
import "./Nodes.css";
import { Button, List, ListItem, ListItemText, ListItemAvatar, ListSubheader, Badge, Box, Paper } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import BottomMenuBar from "../components/BottomMenuBar";

const nodes = [
  {
    id: '1FG5dh7h1',
    name: 'FakeNode 1',
    group: 'Tomatoes',
    status: 'Offline',
    x: 65,
    y: 45,
    z: 10
  },{
    id: '1FG5dh7h2',
    name: 'FakeNode 2',
    group: 'Carrots',
    status: 'Online',
    x: 45,
    y: 45,
    z: 10
  },{
    id: '1FG5dh7h3',
    name: 'FakeNode 3',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 55,
    z: 10
  },{
    id: '1FG5dh7h4',
    name: 'FakeNode 4',
    group: 'Carrots',
    status: 'Online',
    x: 45,
    y: 55,
    z: 10
  },{
    id: '1FG5dh7h5',
    name: 'FakeNode 5',
    group: 'Carrots',
    status: 'Offline',
    x: 45,
    y: 65,
    z: 10
  },{
    id: '1FG5dh7h6',
    name: 'FakeNode 6',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 65,
    z: 10
  },{
    id: '1FG5dh7h7',
    name: 'FakeNode 7',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 75,
    z: 10
  },
];

const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    height: '100%',
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    height: '15px',
    minWidth: '15px',
  },
}))(Badge);

export default function Nodes() {
  const offlineNodes = nodes.filter((node) => node.status === 'Offline');
  const onlineNodes = nodes.filter((node) => node.status === 'Online');
  const classes = useStyles();

  return (
    <div>
      <TopMenuBar block pageName="Nodes" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
      <Paper id="nodesList">
        <List color="primary">
          <ListSubheader disableSticky='true'>Offline nodes</ListSubheader>
          {offlineNodes.map((node) =>
            <LinkContainer to={"/nodeInfo/"+node.id}>
              <ListItem className="noPadding">
                <ListItemAvatar>
                  <StyledBadge classes={{ badge: "offline" }} badgeContent=" ">
                    <img src={ nodeIcon } alt="nodeIcon" className="nodeListNodeIcon" />
                  </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary={node.name} secondary={node.group} />
              </ListItem>
            </LinkContainer>
          )}
          <ListSubheader disableSticky='true'>Online nodes</ListSubheader>
          {onlineNodes.map((node) =>
            <LinkContainer to={"/nodeInfo/"+node.id}>
              <ListItem className="noPadding">
                <ListItemAvatar>
                  <StyledBadge classes={{ badge: "online" }} badgeContent=" ">
                    <img src={ nodeIcon } alt="nodeIcon" className="nodeListNodeIcon" />
                  </StyledBadge>
                </ListItemAvatar>
                <ListItemText primary={node.name} secondary={node.group} />
              </ListItem>
            </LinkContainer>
          )}
        </List>
      </Paper>
      <Box className="buttonContainer">
        <LinkContainer to="/installation">
          <Button variant="contained" size="large" color="primary" color="primary" className={classes.button}>
            <img src={ nodeIcon } alt="nodeIcon" className="customNodeIcon" />
            Start Installation
          </Button>
        </LinkContainer>
      </Box>
      <BottomMenuBar slectedIcon={0} block/>
    </div>
  );
}
