import React from "react";
import firebase from "firebase";
import {
  Container,
  Typography,
  Box,
  Button,
} from '@material-ui/core';
import TopMenuBar from '../components/TopMenuBar';
import fbase from "../firebase"

let email;
let name;

function buttonHandler() {
    firebase.auth().sendPasswordResetEmail(email)
}


export default function Profile(props) {
    // check if user is logged in, if not push to login page
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("User is signed in");
            email = user.email;
            name = user.displayName;
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
        <Typography variant="body1">{name}</Typography>
    </Box>
    <Box m={1}>
      <Typography variant="h6" component="h1">Email</Typography>
      <Typography variant="body1">{email}</Typography>
    </Box>
    <Box m={1}>
      <Button variant="contained" onClick={buttonHandler}>
        Reset password
      </Button>
    </Box>
    </Container>
  );
}
