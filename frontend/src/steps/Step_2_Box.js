import React from "react";
import "../containers/Home.css";
import {
  Box,
  Container,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fade,
} from '@material-ui/core';
import PowerIcon from '@material-ui/icons/Power';
import RouterIcon from '@material-ui/icons/Router';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import NodeIcon from "../icons/icon_node.js";

const useStyles = makeStyles(theme => ({
  button: {
    bottom: 20,
    position: 'fixed',
    margin: 0,
  },
  avatarColor:{
    backgroundColor:'#fff',
  },
  section1: {
    margin: theme.spacing(2),
  },
}))

export default function Step2(){
  const classes = useStyles()
  return(
    <Container>
            < Fade in="true">
            <Box m={1}>
              <Typography variant="h3">
                Open the box
              </Typography>
              <Typography variant="subtitle1" gutterBottom={true}>
                In the box are the following items:
              </Typography>
            </Box>
            </Fade>
            <Box>
            <List>
              <Fade in={true} style={{ transitionDelay: '200ms' }}>
                <ListItem>
                  <ListItemIcon>
                    <RouterIcon color="primary" size="large"/>
                  </ListItemIcon>
                  <ListItemText primary="The Gateway" secondary="The connection between the Nodes and the Internet" />
                </ListItem>
              </Fade>
              <Fade in={true} style={{ transitionDelay: '500ms' }}>
                <ListItem>
                  <ListItemIcon>
                    <NodeIcon width="24px" height="24px" color="primary"/>
                  </ListItemIcon>
                  <ListItemText primary="Nodes" secondary="The sensors that give you insights" />
                </ListItem>
              </Fade>
              <Fade in={true} style={{ transitionDelay: '800ms' }}>
                <ListItem>
                  <ListItemIcon>
                    <SettingsEthernetIcon color="primary"/>
                  </ListItemIcon>
                  <ListItemText primary="LAN cable" secondary="To connect the Gateway to the Internet" />
                </ListItem>
              </Fade>
              <Fade in={true} style={{ transitionDelay:'1100ms' }}>
                <ListItem>
                  <ListItemIcon>
                    <PowerIcon color="primary"/>
                  </ListItemIcon>
                  <ListItemText primary="Power Supply" secondary="To give the Gateway power" />
                </ListItem>
              </Fade>
            </List>
            </Box>
      </Container>
  );
}
