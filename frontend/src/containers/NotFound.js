import React from "react";
import "./NotFound.css";
import firebase from "firebase";

export default function NotFound(props) {

    //if there's no user push to login page
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("User is signed in");

        } else {
            console.log("User is not signed in");
            props.history.push("/login")
        }
    });
  return (
    <div className="NotFound">
      <h3>Sorry, page not found!</h3>
    </div>
  );
}
