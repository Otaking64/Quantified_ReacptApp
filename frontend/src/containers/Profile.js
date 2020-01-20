import React from "react";
import firebase from "firebase";
import {
  Container,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import TopMenuBar from '../components/TopMenuBar';

export default function Profile(props) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("User is signed in");

        } else {
            console.log("User is not signed in");
            props.history.push("/login")
        }
    });
  return (
    <Container>
      <TopMenuBar block pageName="Dashboard" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>

    <Box m={1}>
        <Typography component="h1" variant="h6">Name</Typography>
        <Typography variant="body1">Quenten Zandvliet</Typography>
    </Box>
    <Box m={1}>
      <Typography variant="h6" component="h1">Email</Typography>
      <Typography variant="body1">quentenzandvliet@me.com</Typography>
    </Box>
    <Box m={1}>
      <Button variant="contained">
        Save settings
      </Button>
    </Box>
    </Container>
  );
}
