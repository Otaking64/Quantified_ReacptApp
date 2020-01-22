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
let nodeAmount;
let nid;
let xn;
let yn;
let isitdone = false;


//get user location and save user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        yn = position.coords.latitude;
        xn = position.coords.longitude;

    });
}else {

}

export default class step8 extends Component {

    constructor(props) {
        super(props);
        this.state = {nodesName: '', nodesGroup: '', isOpen: false, isDone: false, snackbarmessage: "closed"};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeGroup = this.handleChangeGroup.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAmount()
    }
    //set amoutn of nodes that will be added
    setAmount =() =>{
        var user = Firebase.auth().currentUser;
        if (user) {
            const uid = user.uid;
            Firebase.firestore().collection(uid).doc("nodes").get().then(function(querySnapshot){
                nodeAmount = parseInt(querySnapshot.data().amount)
                console.log(nodeAmount)
                });


        }
    };

    state = {
        result: ''
    };
    //handle input node name
    handleChangeName(event){
      this.setState({nodesName: event.target.value});
    }
    //handle input node group
    handleChangeGroup(event){
      this.setState({nodesGroup: event.target.value});
    }
 //close snackbar
    handleClose = () =>{
      this.setState({isOpen: false});
    }
//lazy way of opening snackbar
    handleOpen = () =>{
        this.setState({isOpen:true})
    }
    //handle QR scan
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
                        isOpen: true,
                        snackbarmessage: "Node was already added. Try another one!"
                    });
                    //set node id
                    nid = nodedata.quantified.id;
                    //check if user exists
                    if (user) {
                        //get user id
                        const uid = user.uid;
                        //check if node is already in database
                        Firebase.firestore().collection(uid).doc(nid).get()
                            .then((docSnapshot) =>{
                                if (docSnapshot.exists){
                                    this.setState({
                                        isOpen: true,
                                        snackbarmessage: "Node was already added. Try another one!"
                                    });
                                    //if node is not already in database add it!
                                }else {
                                    Firebase.firestore().collection(uid).doc(nid).set(nodedata).then(function () {
                                        console.log("Written to firestore");
                                    });
                                    this.setState({
                                        isOpen: true,
                                        snackbarmessage: "Node Scanned"
                                    });
                                    isScanned = true;
                                    console.log(isScanned)

                                }

                            });
                        this.setState({isOpen: false});


                    }else{
                        //apparently there is no user, push back to login
                        console.log("No user");
                        this.props.history.push("/login")
                    }
                }else{
                    this.setState({
                        isOpen: true
                    });
                }
            }catch (e) {
                //error from qr scan module (error details are logged in console)
                console.error(e);
                this.setState({
                    isOpen: true,
                    snackbarmessage: "Can't find node QR code"
                });
            }
        }
    };



//handle submit of group and name of new node also submits user location
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
                            group: nodesGroup,
                            x: xn,
                            y: yn,
                            z: 1
                        }).then(function () {
                            console.log("Written to firestore");
                            isitdone = true;


                        });

                        //if there's more than 1 node remove 1 node from amount of nodes that has to be done
                        if(nodeAmount > 1){
                            nodeAmount--;
                            isScanned = false;
                            this.setState({isOpen: false})
                        }else{
                            //1 or less node means that we are done adding nodes
                            this.setState({isDone: true, isOpen: true ,snackbarmessage: "data saved!" });
                        }
                        //move to next step - auto move to next page is yet to implemented

                    }else {


                    }
                });


        }else{
            //if there's no user push to login page
            console.log("No user");
            this.props.history.push("/login")
        }
    }



    //handle error of using a non json parseble QR code or json object that contains no quantified object
    handleError = err => {
        console.error(err);
        this.setState({isOpen:true})
        this.setState({
            snackbarmessage: "Something went wrong! Did you use the QR code?"
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
                            //different instructions on this step
                            {!isScanned && ("Scan the QR code to add the node to the system")}
                            {isScanned & !this.state.isDone && ("Give the node a name and assign it to a group")}
                            {this.state.isDone && ("Move on to the next step")}
                        </Typography>
                    </Box>
                    {!isScanned && (//actual QR object
                        <Box>
                                <QrReader
                                    delay={300}
                                    onError={this.handleError}
                                    onScan={this.handleScan}
                                    facingMode={"environment"}
                                />
                        </Box>)}
                <Snackbar
                    open={this.state.isOpen}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    message={this.state.snackbarmessage}
               />
                        {isScanned && (
                    <Box m={1}>
                        {!this.state.isDone &&(<form onSubmit={this.handleSubmit}>
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
                                    color="primary"
                                    >
                                Save
                            </Button>
                            <Snackbar
                              open={this.isOpen}
                              autoHideDuration={2000}
                              onClose={this.handleClose}
                            >
                            <SnackbarContent
                              message="Node added"
                            />
                            </Snackbar>
                        </div>
                        </form>)}
                    </Box>)}

            </Container>

        )
    }
}
