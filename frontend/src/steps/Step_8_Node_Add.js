import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
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
import "../steps/Step.css"


let qrwidth = "100%";

export default class step8 extends Component {
    state = {
        result: ''
    };



    handleScan = data => {
        if (data) {
            this.setState({
                result: data
            })
            setTimeout(() => {qrwidth = "0%"}, 2000);
        }
    }
    handleError = err => {
        console.error(err)
        this.setState({
            result: "Something went wrong! Did you use the QR code?"
        })
    }

    render() {
        return (

            <Container>

                <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
                    <Grid item>
                        <Typography variant="h4" align="center">Nodes</Typography>
                        <Typography display="block" variant="body1">
                            Scan the QR code to add the node to the system
                        </Typography>
                    </Grid>
                    <Grid style={{width: "55%"}}>
                        <div>
                            <QrReader
                                delay={300}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: {qrwidth} }}
                                facingMode={"environment"}
                            />
                            <p>{this.state.result}</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>

        )
    }
}
