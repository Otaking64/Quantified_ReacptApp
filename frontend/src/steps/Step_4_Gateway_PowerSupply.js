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
  Avatar,
  ListItemText
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  section1: {
    margin: theme.spacing(3, 2),
  },
  avatarColor:{
    backgroundColor: "#599AD5"
  }
}));

export default function Step4(){
  const classes = useStyles()
  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Grid item className={classes.section1}>
          <Typography variant="h3" align="center">Gateway</Typography>
        <Typography display="block" variant="body1">
            Use the following steps to power on the gateway:
          </Typography>
        </Grid>
        <Grid item>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarColor}>
                  1
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Pick up the power supply in the provided box" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarColor}>
                  2
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Plug the power supply in your local power outlet" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.avatarColor}>
                  3
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Plug the other end in the provided gateway" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
