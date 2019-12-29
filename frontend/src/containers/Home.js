import React from "react";
import nodeIcon from '../icons/node.png';
import { Fab, List, ListItem, ListItemText, ListItemAvatar, ListSubheader, Badge, Box } from '@material-ui/core';
import { withStyles  } from '@material-ui/core/styles';
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import BottomMenuBar from "../components/BottomMenuBar";

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
  const offlineNodes = nodes.filter((node) => node.status === 'Offline');
  const onlineNodes = nodes.filter((node) => node.status === 'Online');

  return (
    <div className="homePage">
      <TopMenuBar block pageName="Home" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={false} backRoutePage="/"/>
      <List id="nodesList" color="primary">
        <ListSubheader disableSticky='true'>Offline nodes</ListSubheader>
        {offlineNodes.map((node) =>
          <ListItem className="noPadding">
            <ListItemAvatar>
              <StyledBadge classes={{ badge: "offline" }} badgeContent=" ">
                <img src={ nodeIcon } alt="nodeIcon" className="nodeListNodeIcon" />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText primary={node.name} secondary={node.group} />
          </ListItem>
        )}
        <ListSubheader disableSticky='true'>Online nodes</ListSubheader>
        {onlineNodes.map((node) =>
          <ListItem className="noPadding">
            <ListItemAvatar>
              <StyledBadge classes={{ badge: "online" }} badgeContent=" ">
                <img src={ nodeIcon } alt="nodeIcon" className="nodeListNodeIcon" />
              </StyledBadge>
            </ListItemAvatar>
            <ListItemText primary={node.name} secondary={node.group} />
          </ListItem>
        )}
      </List>
      <Box className="contentCentered">
        <LinkContainer to="/step1">
          <Fab size="large" variant="extended" color="primary" className="nodeOptionsButton">
            <img src={ nodeIcon } alt="nodeIcon" className="customNodeIcon" />
            Node options
          </Fab>
        </LinkContainer>
      </Box>
      <BottomMenuBar block/>
    </div>
  );
}
