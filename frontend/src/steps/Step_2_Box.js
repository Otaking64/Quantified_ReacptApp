import React from "react";
import "../containers/Home.css";
import {
  Avatar,
  Container,
  Typography,
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Fade,
  Zoom
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
        <Grid container alignItems="center" justify="center" direction="column">
          <Fade in="true">
            <Grid item className={classes.section1}>
              <Typography variant="h3" align="center">Open the box</Typography>
              <Typography display="block" variant="body1">
              In the box are the following items:
              </Typography>
            </Grid>
          </Fade>
          <Grid item>
            <List>
              <Zoom in={true} style={{ transitionDelay: '200ms' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarColor}>
                      <RouterIcon color="primary" size="large"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="The Gateway" secondary="The connection between the Nodes and the Internet" />
                </ListItem>
              </Zoom>
              <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarColor}>
                        <NodeIcon width="24px" height="24px" color="primary"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Nodes" secondary="The sensors that give you insights" />
                </ListItem>
              </Zoom>
              <Zoom in={true} style={{ transitionDelay: '800ms' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarColor}>
                      <SettingsEthernetIcon color="primary"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="LAN cable" secondary="To connect the Gateway to the Internet" />
                </ListItem>
              </Zoom>
              <Zoom in={true} style={{ transitionDelay:'1100ms' }}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarColor}>
                      <PowerIcon color="primary"/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Power Supply" secondary="To give the Gateway power" />
                </ListItem>
              </Zoom>
            </List>
          </Grid>
        </Grid>
      </Container>
  );
}
