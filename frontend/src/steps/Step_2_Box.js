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
  ButtonGroup,
  Button,
} from '@material-ui/core';
import PowerIcon from '@material-ui/icons/Power';
import RouterIcon from '@material-ui/icons/Router';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import NodeIcon from "../icons/icon_node.js";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

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
            <Box m={1}>
              <Typography variant="overline">
              Installation &#10140; Box
              </Typography>
              <Typography variant="h4">
                Open the box
              </Typography>
              <Typography variant="subtitle1" gutterBottom={true}>
                In the plug and play box are these items:
              </Typography>
            </Box>
            <Fade in={true}>
            <Box m={1}>
            <List>

                <ListItem>
                  <ListItemIcon>
                    <RouterIcon color="primary" size="large"/>
                  </ListItemIcon>
                  <ListItemText primary="Gateway" secondary="To connect the nodes" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <NodeIcon width="24px" height="24px" color="primary"/>
                  </ListItemIcon>
                  <ListItemText primary="Nodes" secondary="The sensors that give you insights" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SettingsEthernetIcon color="primary"/>
                  </ListItemIcon>
                  <ListItemText primary="Ethernet cable" secondary="To connect the gateway to the internet" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PowerIcon color="primary"/>
                  </ListItemIcon>
                  <ListItemText primary="Power cable" secondary="To give the gateway power" />
                </ListItem>
            </List>
            </Box>
            </Fade>
            <Box m={1} align="center">
              <Typography variant="body1">
                Is any item missing or not functional?
              </Typography>
              <ButtonGroup
                orientation="horizontal"
                color="primary"
                aria-label="vertical outlined primary button group"
                className={classes.section3}
              >
                <Button
                  startIcon={<PhoneIcon />}
                  href="tel:+31651775925"
                >
                  Call us
                </Button>
                <Button
                  startIcon={<MailIcon />}
                  href="mailto:info@quantified.eu?Subject=App%20problem"
                  target="_top"
                >
                  Mail us
                </Button>
              </ButtonGroup>
            </Box>
      </Container>
  );
}
