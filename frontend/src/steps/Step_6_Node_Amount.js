import React from "react";
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
} from '@material-ui/core';
import NumericInput from 'react-numeric-input';

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
