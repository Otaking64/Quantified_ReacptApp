import React from "react";
import "../containers/Home.css";
import {
    Button,
    Container,
    Typography,
    Grid,
    Box,
    LinearProgress,
    makeStyles, Avatar,
} from '@material-ui/core';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import NodeIcon from "../icons/icon_node";
import NumericInput from 'react-numeric-input';

const useStyles = makeStyles(theme => ({
    avatarColor:{
        backgroundColor:'#fff',
    },
    section1: {
      margin: theme.spacing(3,2)
    }
}))

let nodequant = 1;

const quanthandler = (direction) => {
    if(direction === "up"){
        nodequant += 1;
    }else{
        nodequant -= 1;
    }
}

export default function Step6(){
    const classes = useStyles()

    return(
        <Container>
            <TopMenuBar block pageName="Installation" hamburgerMenu={false} closeButtonOnly={false} closeWithPrompt={true} backButton={false} backRoutePage="/"/>
            <Grid container direction="column" alignItems="center" justify= "center" spacing={2}>
                <Grid item className={classes.section1}>
                    <Typography variant="h3" align="center">Nodes</Typography>
                    <Typography display="block" variant="body1">
                        Choose the amount of nodes you have
                    </Typography>
                </Grid>
                    <NumericInput
                        className="form-control"
                        value={ 1 }
                       min={ 1 }
                        max={ 1000 }
                        step={ 1 }
                        precision={ 0 }
                        size={ 5 }
                      mobile
                    />


            </Grid>
        </Container>
    );
}
