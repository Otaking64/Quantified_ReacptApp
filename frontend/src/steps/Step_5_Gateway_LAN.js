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
  Snackbar,
  SnackbarContent,
} from '@material-ui/core';
import {green} from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  section1: {
    margin: theme.spacing(3, 2),
  },
  avatarColor:{
    backgroundColor: "#599AD5"
  },
  buttonSuccess: {
    backgroundColor: '#00A49B',
    '&:hover': {
      backgroundColor: '#00A49B',
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

export default function Step5(){
  const classes = useStyles()
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    }
  }, []);

  const handleButtonClick = () => {
    if(!loading){
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() =>{
        setSuccess(true);
        setLoading(false);
        setOpen(true);
      }, 2000);
    }
  };

  return(
    <Container>
          <Box m={1}>
            <Typography variant="overline">
            Installation &#10140; Gateway
            </Typography>
            <Typography variant="h4">Connecting network</Typography>
            <Typography display="block" variant="body1">
              Connecting the gateway to the internet to read data
            </Typography>
          </Box>
        <Box m={1}>
          <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarColor}>
                    1
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Pick up the LAN cable from the provided box" />
              </ListItem>
              <ListItem>
                <ListItemAvatar color="primary">
                  <Avatar className={classes.avatarColor}>
                    2
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Plug one end of the LAN cable in your local router" />
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
        </Box>
        <Box className={classes.wrapper} m={1}>
            <Button
              variant="contained"
              color="primary"
              className={buttonClassname}
              disabled={loading}
              onClick={handleButtonClick}
              >
              {!success && 'Check gateway connection' }
              {success && 'Gateway is connected' }
            </Button>
            {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            <Snackbar
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
              className={classes.snackbar}
            >
            <SnackbarContent
              message="Gateway network connected"
              className={classes.snackColor}
            />
            </Snackbar>
        </Box>
    </Container>
  );
}
