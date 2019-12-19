import React from "react";
import nodeIcon from '../icons/node.png';
import { Fab, List, ListItem, ListItemText, ListItemAvatar, ListSubheader, Badge, Box } from '@material-ui/core';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap"

import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const nodes = [
  {
    name: 'FakeNode 1',
    group: 'Tomatoes',
    status: 'Offline',
    x: 65,
    y: 45,
    z: 10
  },{
    name: 'FakeNode 2',
    group: 'Carrots',
    status: 'Online',
    x: 45,
    y: 45,
    z: 10
  },{
    name: 'FakeNode 3',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 55,
    z: 10
  },{
    name: 'FakeNode 4',
    group: 'Carrots',
    status: 'Online',
    x: 45,
    y: 55,
    z: 10
  },{
    name: 'FakeNode 5',
    group: 'Carrots',
    status: 'Offline',
    x: 45,
    y: 65,
    z: 10
  },{
    name: 'FakeNode 6',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 65,
    z: 10
  },{
    name: 'FakeNode 7',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 75,
    z: 10
  },
];

const useStyles = makeStyles(theme => ({
  nodesList: {
    height: '380px',
    border: '1px solid',
    borderRadius: '10px',
    margin: '24px 14px',
    overflowY: 'scroll'
  },
  nodeOptionsButton: {
    margin: '24px auto',
    margin: '14px'
  },
  nodeButtonIcon: {
    width: '9px',
    marginRight: '8px',
    filter: 'invert(100%)'
  },
  nodeAvatar: {
    height: '35px',
    marginLeft: '14px'
  },
  online: {
    backgroundColor: '#00FF00'
  },
  offline: {
    backgroundColor: '#FF0000'
  },
  noPadding: {
    padding: 0
  },
  contentCentered: {
    textAlign: 'center',
    width: '100%'
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

export default function Home() {
  const classes = useStyles();
  const offlineNodes = nodes.filter((node) => node.status == 'Offline');
  const onlineNodes = nodes.filter((node) => node.status == 'Online');

  return (
    <div className="homePage">
      <List className={classes.nodesList} color="primary">
        <ListSubheader disableSticky='true'>Offline nodes</ListSubheader>
        {offlineNodes.map((node) =>
          <ListItem className={classes.noPadding}>
            <ListItemAvatar>
              <StyledBadge classes={{ badge: classes.offline }} badgeContent=" ">
                <img src={ nodeIcon } alt="nodeIcon" className={classes.nodeAvatar} />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText primary={node.name} secondary={node.group} />
          </ListItem>
        )}
        <ListSubheader disableSticky='true'>Online nodes</ListSubheader>
        {onlineNodes.map((node) =>
          <ListItem className={classes.noPadding}>
            <ListItemAvatar>
              <StyledBadge classes={{ badge: classes.online }} badgeContent=" ">
                <img src={ nodeIcon } alt="nodeIcon" className={classes.nodeAvatar} />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText primary={node.name} secondary={node.group} />
          </ListItem>
        )}
      </List>
      <Box className={classes.contentCentered}>
        <LinkContainer to="/step1">
          <Fab size="large" variant="extended" variant="containedSecondary" color="primary" className={classes.nodeOptionsButton}>
            <img src={ nodeIcon } alt="nodeIcon" className={classes.nodeButtonIcon} />
            Node options
          </Fab>
        </LinkContainer>
      </Box>
    </div>
  );
}
