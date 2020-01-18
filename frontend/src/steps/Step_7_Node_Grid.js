import React, {Component} from "react";
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
} from '@material-ui/core';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Map, GoogleApiWrapper } from 'google-maps-react';


function step7() {
    const mapStyles = {
        width: '400px',
        height: '500px',
    };
    return (
        <Container>
          <Box m={1}>
            <Typography variant="overline">
              Installation &#10140; Nodes
            </Typography>
            <Typography variant="h3">Nodes</Typography>
            <Typography display="block" variant="body1">
              Position the nodes on the map
            </Typography>
          </Box>
          <Box m={1} className="mapholder">
            <Map
              google={window.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 52.444, lng: 4.22}}
            />
          </Box>
        </Container>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyASh-cM7S0mBbFiIItNyeEMjtJh8lD4oN0'
})(step7);
