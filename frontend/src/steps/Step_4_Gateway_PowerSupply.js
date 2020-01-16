import React from "react";
import clsx from 'clsx';
import "../containers/Home.css";
import {
  Container,
  Typography,
  Grid,
  Button,
  makeStyles,
  List,
  ListItem,
  CircularProgress,
  Fab,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Zoom,
  Snackbar,
  Fade
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import {green} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  section1: {
    margin: theme.spacing(3, 2),
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  avatarColor:{
    backgroundColor: "#599AD5"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    }
  },
  buttonProgress: {
    color: green[500],
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  snackbar: {
    bottom: 48,
  }
}));

export default function Step4(){
  const classes = useStyles()
  const [loading, setLoading] = React.useState(false);
  const [succes, setSucces] = React.useState(false);
  const timer = React.useRef();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  const buttonClassname = clsx({
    [classes.buttonSuccess]: succes,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    }
  }, []);

  const handleButtonClick = () => {
    if(!loading){
      setSucces(false);
      setLoading(true);
      timer.current = setTimeout(() =>{
        setSucces(true);
        setLoading(false);
        setOpen(true)
      }, 2000)
    }
  };


  return(
    <Container>
      <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
        <Fade in="true">
          <Grid item className={classes.section1}>
            <Typography variant="h3" align="center">Gateway</Typography>
          <Typography display="block" variant="body1">
              Use the following steps to power on the gateway:
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
                <ListItemText primary="Pick up the power supply in the provided box" />
              </ListItem>
            </Zoom>
            <Zoom in={true} style={{ transitionDelay:'500ms' }}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                    2
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Plug the power supply in your local power outlet" />
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
        <Grid item>
          <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={handleButtonClick}
            >
            Check gateway power
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            message="Gateway is connected"
            className={classes.snackbar}
          />
      </div>
        </Grid>
      </Grid>
    </Container>
  );
}
