import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
} from '@material-ui/core';
import "../steps/Step.css"
import firebase from "../firebase";
import Firebase from "firebase"





export default class step8 extends Component {
    state = {
        result: ''
    };

    handleAddNode(node) {

    }

    handleScan = data => {
        var user = Firebase.auth().currentUser;
        if (data) {
            //try to parse JSON (if not JSON then bad QR code)
            try {
                var nodedata = JSON.parse(data);
                console.log(nodedata);
                //if JSON check for quantified object (if not then bad QR code)
                if(nodedata.hasOwnProperty("quantified") || nodedata.hasOwnProperty("Quantified")){
                    console.log("Quantified");
                    this.setState({
                        result: "Node Scanned!"
                    });
                    if (user) {
                        const uid = user.uid;
                        Firebase.firestore().collection("nodes").doc(uid).set(nodedata).then(function () {
                            console.log("Written to firestore");
                            //move to next step
                        });
                    }else{
                        console.log("No user");
                        this.props.history.push("/login")
                    }
                }else{
                    this.setState({
                        result: "Can't find node QR code"
                    });
                }
            }catch (e) {
                console.log(e);
                this.setState({
                    result: "Can't find node QR code"
                });
            }
        }
    };
    handleError = err => {
        console.error(err);
        this.setState({
            result: "Something went wrong! Did you use the QR code?"
        })
    };

    render() {
        return (
            <Container>
                <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
                    <Grid item>
                        <Typography variant="h3" align="center">Nodes</Typography>
                        <Typography display="block" variant="body1">
                            Scan the QR code to add the node to the system
                        </Typography>
                    </Grid>
                    <Grid style={{width: "50%"}}>

                        <div>
                            <QrReader
                                delay={300}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                facingMode={"environment"}
                            />
                            <p>{this.state.result}</p>
                        </div>
                </Grid>
            </Container>

        )
    }
}
