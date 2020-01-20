import React from "react";
import clsx from 'clsx';
import "../containers/Home.css";
import {
  Container,
  Typography,
  Box,
  Button,
  makeStyles,
  List,
  ListItem,
  CircularProgress,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Zoom,
  Snackbar,
  SnackbarContent,
  Fade
} from '@material-ui/core';
import {green} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  section1: {
    margin: theme.spacing(3, 2),
  },
  wrapper: {
    position: 'relative',
    align: 'left'
  },
  avatarColor:{
    backgroundColor: "#599AD5"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    //disabled: 'true'
  },
  buttonProgress: {
    color: green[500],
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    align: 'left',
    marginTop: -12,
    marginLeft: -12,
  },
  snackbar: {
    bottom: 56,
  },
  snackColor: {
    backgroundColor: "#00A49B"
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
        setOpen(false)
      }, 2000);
    }
  };


  return(
    <Container>

        <Fade in="true">
          <Box m={1}>
            <Typography variant="overline">
              Installation &#10140; Gateway
            </Typography>
            <Typography variant="h4">
              Connecting power
            </Typography>
            <Typography display="block" variant="body1">
                Use the following steps to power on the gateway:
            </Typography>
          </Box>
        </Fade>
        <Box>
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
          </Box>
          <Box className={classes.wrapper} m={1}>
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
            className={classes.snackbar}
          >
          <SnackbarContent
            message="Gateway is connected"
            className={classes.snackColor}
          />
          </Snackbar>
      </Box>

    </Container>
  );
}
