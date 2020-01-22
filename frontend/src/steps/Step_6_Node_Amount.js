import React, { Component }  from "react";
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
    TextField,
    Button
} from '@material-ui/core';
import Firebase from "firebase";
let sentAmount = false;




export default class Step6 extends Component{

    constructor(props) {
        super(props);
        let newnodesAmountObject = {
            amount: 1
        };
        this.state = {doeieks: '',};
        var user = Firebase.auth().currentUser;
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.state = {nodesAmount: 1};
        if(user){
            const uid = user.uid;
            Firebase.firestore().collection(uid).doc("nodes").set(newnodesAmountObject).then(function () {
            })

        }
    }

    handleChangeAmount = (event) => {
        this.setState({nodesAmount: event.target.value});
    }

    setAmount = () => {
        this.setState({nodesAmount:1})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let amountOfNodes = this.state.nodesAmount;
        var user = Firebase.auth().currentUser;

        let nodesAmountObject = {
            amount: amountOfNodes
        };

        console.log(amountOfNodes)

        if(user){
            const uid = user.uid;
            Firebase.firestore().collection(uid).doc("nodes").set(nodesAmountObject).then(function () {
                sentAmount = true;
            })
            this.setAmount()
        }

    }

    render()
    {
        return (
            <Container>
                <Box m={1}>
                    <Typography variant="overline">
                        Installation &#10140; Nodes
                    </Typography>
                    <Typography variant="h4">Nodes</Typography>
                    <Typography display="block" variant="body1">
                        {!sentAmount && ("Choose the amount of nodes you want to add")}
                        {sentAmount && ("Press next to continue to the next step")}
                    </Typography>
                </Box>
                <Box m={1}>
                    {!sentAmount && (
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                name="nodeAmount"
                                id="nodeAmount"
                                label="Amount of nodes"
                                type="number"
                                onChange={this.handleChangeAmount}
                                InputLabelProps={{shrink: true,}}
                            />
                          <Box mt={1}>
                            <Button type="submit"
                                    variant="contained"
                                    color="primary">
                                Save
                            </Button>
                          </Box></form>)}


                </Box>
            </Container>
        );
    }
}
