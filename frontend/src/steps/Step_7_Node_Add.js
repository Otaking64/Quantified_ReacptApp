import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
    Grid,
    SnackbarContent,
    Snackbar,
    TextField,
    Button,
    Input,
    withStyles
} from '@material-ui/core';
import "../steps/Step.css"
import firebase from "firebase";
import Firebase from "firebase";


let isScanned = false;
let nid;

export default class step8 extends Component {

    constructor(props) {
        super(props);
        this.state = {nodesName: '', nodesGroup: '', isOpen: false}
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    state = {
        result: ''
    };

    handleChangeName(event){
      this.setState({nodesName: event.target.value});
    }

    handleChangeGroup(event){
      this.setState({nodesGroup: event.target.value});
    }

    handleClose = () =>{
      this.setState({isOpen:false})
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

                    nid = nodedata.quantified.id;
                    if (user) {
                        const uid = user.uid;
                        Firebase.firestore().collection(uid).doc(nid).get()
                            .then((docSnapshot) =>{
                                if (docSnapshot.exists){
                                    this.setState({
                                        result: "Node was already added. Try another one!"
                                    });

                                }else {
                                    Firebase.firestore().collection(uid).doc(nid).set(nodedata).then(function () {
                                        console.log("Written to firestore");
                                    });
                                    this.setState({
                                        result: "Node Scanned!"
                                    });
                                    isScanned = true;
                                    console.log(isScanned)
                                }
                            });


                    }else{
                        console.log("No user");
                        this.props.history.push("/login")
                    }
                }else{
                    this.setState({
                        isOpen: true
                    });
                }
            }catch (e) {
                console.error(e);
                this.setState({
                    result: "Can't find node QR code"
                });
            }
        }
    };




    handleSubmit = (event) =>{
        event.preventDefault();
        const nodesGroup = this.state.nodesGroup;
        const nodesName = this.state.nodesName;


        var user = Firebase.auth().currentUser;
        if (user) {
            const uid = user.uid;
            console.log("uid: "+ uid);
            console.log("nid: " + nid);
            Firebase.firestore().collection(uid).doc(nid).get()
                .then((docSnapshot) =>{
                    if (docSnapshot.exists){
                        Firebase.firestore().collection(uid).doc(nid).update({
                            name: nodesName,
                            group: nodesGroup
                        }).then(function () {
                            console.log("Written to firestore");
                        });

                        //move to next step

                    }else {


                    }
                });


        }else{
            console.log("No user");
            this.props.history.push("/login")
        }
    }




    handleError = err => {
        console.error(err);
        this.setState({isOpen:true})
        this.setState({
            result: "Something went wrong! Did you use the QR code?"
        })
    };

    render() {
        return (
            <Container>
                <Box m={1}>
                        <Typography variant="overline">
                          Installation &#10140; Nodes
                        </Typography>
                        <Typography variant="h4">Nodes</Typography>
                        <Typography display="block" variant="body1">
                            {!isScanned && ("Scan the QR code to add the node to the system")}
                            {isScanned && ("Give the node a name and assign it to a group")}
                        </Typography>
                    </Box>
                    {!isScanned && (
                        <Box m={1}>
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    facingMode={"environment"}
                                />
                                <Snackbar
                                  open={this.isOpen}
                                  autoHideDuration={2000}
                                  onClose={this.handleClose}
                                >
                                <SnackbarContent
                                  message={this.state.result}
                                />
                                </Snackbar>
                        </Box>)}
                        {isScanned && (
                    <Box m={1}>
                        <form onSubmit={this.handleSubmit}>
                        <div>
                          <Box m={1}>
                            <Typography component="h1" variant="h6">Node Name</Typography>
                          <Input
                                name="nodesName"
                                placeholder="Node name"
                                id="nodesName"
                                fullWidth
                                margin="normal"
                                required
                                type="text"
                                autoFocus
                                onChange={this.handleChangeName}
                            />
                        </Box>
                          <Box m={1}>
                          <Typography component="h1" variant="h6">Node Group</Typography>
                          <Input
                                name="nodesGroup"
                                placeholder="Node group"
                                id="nodesGroup"
                                fullWidth
                                margin="normal"
                                required
                                type="text"
                                onChange={this.handleChangeGroup}
                            />
                        </Box>
                        </div>
                        <div>
                            <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary">
                                Save
                            </Button>
                        </div>
                        </form>
                    </Box>)}

            </Container>

        )
    }
}
