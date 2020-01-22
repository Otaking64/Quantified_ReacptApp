import React from "react";
import "../containers/Home.css";
import {
    Container,
    Typography,
    Box,
    TextField
} from '@material-ui/core';

export default function Step6(){
    return(
        <Container>
                <Box m={1}>
                  <Typography variant="overline">
                  Installation &#10140; Nodes
                  </Typography>
                  <Typography variant="h4">Nodes</Typography>
                  <Typography display="block" variant="body1">
                    Choose the amount of nodes provided in your plug-and-play box
                  </Typography>
                </Box>
                <Box m={1}>
                  <TextField
                    id="standard-number"
                    label="Amount of nodes"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
        </Container>
    );
}
