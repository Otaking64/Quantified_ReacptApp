import React, {Component} from "react";
import "../containers/Home.css";
import {
    Container,
    Typography,
    Grid,
    makeStyles,
} from '@material-ui/core';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Map, GoogleApiWrapper } from 'google-maps-react';

const useStyles = makeStyles(theme => ({
    avatarColor:{
        backgroundColor:'#fff',
    },
    section1: {
      margin: theme.spacing(3,2)
    }
}))


function step7() {
    const mapStyles = {
        width: '400px',
        height: '500px',
    };
    return (
        <Container>
            <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
                <Grid item>
                    <Typography variant="h3" align="center">Nodes</Typography>
                    <Typography display="block" variant="body1">
                        Position the nodes on the map
                    </Typography>
                </Grid>
                    <Grid item className="mapholder">
                    <Map
                        google={window.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: 52.444, lng: 4.22}}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyASh-cM7S0mBbFiIItNyeEMjtJh8lD4oN0'
})(step7);
