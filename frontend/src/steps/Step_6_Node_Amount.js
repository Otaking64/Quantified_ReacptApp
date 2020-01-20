import React from "react";
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import NodeIcon from "../icons/icon_node";
import NumericInput from 'react-numeric-input';

let nodequant = 1;

const quanthandler = (direction) => {
    if(direction === "up"){
        nodequant += 1;
    }else{
        nodequant -= 1;
    }
}

export default function Step6(){
    return(
        <Container>
                <Box m={1}>
                <Typography variant="overline">
                Installation &#10140; Nodes
                </Typography>
                    <Typography variant="h3">Nodes</Typography>
                    <Typography display="block" variant="body1">
                        Choose the amount of nodes you have
                    </Typography>
                </Box>
                <Box m={1}>
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
                </Box>
        </Container>
    );
}
