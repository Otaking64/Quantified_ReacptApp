import React from "react";
import "../containers/Home.css";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Fade,
  Zoom
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  section1: {
    margin: theme.spacing(2),
  },
  avatarColor:{
    backgroundColor: "#599AD5"
  }
}));

export default function Step5(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Fade in="true">
          <Grid item className={classes.section1}>
            <Typography variant="h3" align="center">Gateway</Typography>
            <Typography display="block" variant="body1">
              Use the following steps to connect the internet to the gateway:
            </Typography>
          </Grid>
        </Fade>
        <Grid item>
          <List>
            <Zoom in={true} style={{ transitionDelay:'200ms' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                    1
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Pick up the LAN cable from the provided box" />
              </ListItem>
            </Zoom>
            <Zoom in={true} style={{ transitionDelay:'500ms' }}>
              <ListItem>
                <ListItemAvatar color="primary">
                  <Avatar className={classes.avatarColor}>
                    2
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Plug one end of the LAN cable in your local router" />
              </ListItem>
            </Zoom>
            <Zoom in={true} style={{ transitionDelay:'800ms' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                    3
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Plug the other end in the provided gateway" />
              </ListItem>
            </Zoom>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
