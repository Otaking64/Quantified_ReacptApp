import React from "react";
import "../containers/Home.css";
import {
  Avatar,
  Container,
  Button,
  Typography,
  Grid,
  Box,
  LinearProgress,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap";
import PowerIcon from '@material-ui/icons/Power';
import RouterIcon from '@material-ui/icons/Router';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import TopMenuBar from "../components/TopMenuBar";
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
}))

export default function Step2(){
  const classes = useStyles()
  return(
    <Container>
        <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
        <Grid container alignItems="center" justify="center" direction="column" spacing={2}>
          <Grid item>
            <Box width={300} align="center">
              <Typography variant="overline">Progress</Typography>
              <LinearProgress variant="determinate" value={20}/>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center">Open the box</Typography>
            <Typography display="block" variant="body1">
            In the box are the following items:
            </Typography>
          </Grid>
          <Grid item>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                    <RouterIcon color="primary" size="large"/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="The Gateway" secondary="The connection between the Nodes and the Internet" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                      <NodeIcon width="24px" height="24px" color="primary"/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Nodes" secondary="The sensors that give you insights" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                    <SettingsEthernetIcon color="primary"/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="LAN cable" secondary="To connect the Gateway to the Internet" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                    <PowerIcon color="primary"/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Power Supply" secondary="To give the Gateway power" />
              </ListItem>
            </List>
          </Grid>

          <Grid item className={classes.button} align="center">
            <LinkContainer to="/step3">
              <Box pt={1}>
                <Button size="large" variant="containedSecondary" color="primary">DONE</Button>
              </Box>
            </LinkContainer>
            <LinkContainer to="/step1">
              <Box p={1}>
                <Button size="small" color="primary">Previous step</Button>
              </Box>
            </LinkContainer>
          </Grid>
        </Grid>
      </Container>
  );
}
