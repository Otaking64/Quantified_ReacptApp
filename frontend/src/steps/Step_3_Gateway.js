import React from "react";
import "../containers/Home.css";
import {
  Container,
  Box,
  Typography,
} from '@material-ui/core';
import ExpansionPanel from '../components/ExpansionPanel';

export default function Step3(){
  return(
    <Container>
          <Box m={1}>
            <Typography variant="overline">
            Installation &#10140; Gateway
            </Typography>
            <Typography variant="h4" gutterBottom>Preparing the gateway</Typography>
            <Typography display="block" variant="body1">
              Before we are going to connect the gateway, make sure that you have set-up the following in your local network:
            </Typography>
          </Box>
          <Box m={1}>
              <ExpansionPanel title="Active internet connection" body="Make sure your internet is active to make a connection to the gateway"/>
              <ExpansionPanel title="Open the ports needed to connect" body="Open ports: 2000, 3000 and 603" />
        </Box>
    </Container>
  );
}
