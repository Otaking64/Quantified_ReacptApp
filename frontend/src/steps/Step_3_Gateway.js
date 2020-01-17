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
            <Typography variant="h3">Gateway</Typography>
            <Typography display="block" variant="body1">
              The gateway is needed to connect the nodes to the system. In the following steps we will setup the gateway for use.
            </Typography>
            <RouterIcon color="black" />
          </Box>
        </Fade>
          <Box m={1}>
            <Typography variant="body1">
              Locate the box marked with the following gateway Icon as seen above.
            </Typography>
          </Box>
    </Container>
  );
}
