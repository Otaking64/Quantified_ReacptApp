import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
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
                <Box m={1}>
                  <Typography variant="overline">
                    Installation &#10140; Nodes
                  </Typography>
                    <Typography variant="h3">Nodes</Typography>
                    <Typography display="block" variant="body1">
                          Scan the QR code to add the node to the system
                    </Typography>
                </Box>
                <Box style={{width: "55%"}}>
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
                </Box>
            </Container>

        )
    }
}
