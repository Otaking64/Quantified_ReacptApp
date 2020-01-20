import React from "react";
import "../containers/Home.css";
import {
  Container,
  Box,
  Typography,
  Fade,
} from '@material-ui/core';
import RouterIcon from "@material-ui/icons/Router";

export default function Step3(){
  return(
    <Container>
      <Fade in="true">
          <Box m={1}>
            <Typography variant="overline">
            Installation &#10140; Gateway
            </Typography>
            <Typography variant="h4" gutterBottom>Gateway preparations</Typography>
            <Typography display="block" variant="body1">
              Before we are going to connect the gateway, make sure that you have set-up the following in your local network:
            </Typography>
          </Box>
        </Fade>
          <Box m={1}>
            <Typography variant="body1">

            </Typography>
          </Box>
    </Container>
  );
}
