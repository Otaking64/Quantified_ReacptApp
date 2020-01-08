import React, {Component} from "react";
import "../containers/Home.css";
import {
    Button,
    Container,
    Typography,
    Grid,
    Box,
    LinearProgress,
    makeStyles,
} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const useStyles = makeStyles(theme => ({
    avatarColor:{
        backgroundColor:'#fff',
    },
    section1: {
      margin: theme.spacing(3,2)
    }
}))

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))
export default function step7() {
    return (
        <Container>
            <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
            <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
                <Grid item>
                    <Typography variant="h3" align="center">Nodes</Typography>
                    <Typography display="block" variant="body1">
                        Position the nodes on the map
                    </Typography>
                    <MyMapComponent
                        isMarkerShown
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '500px' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
