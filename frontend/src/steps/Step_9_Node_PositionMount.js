import React from "react";
import {
  Container,
  Typography,
  Box,
  Fade
} from '@material-ui/core';

export default function Step9(){
  return(
    <Container>
        <Fade in="true" style={{ transitionDelay:'200ms' }}>
          <Box m={1}>
            <Typography variant="h3">Nodes</Typography>
            <Typography display="block" variant="body1">
              Verify the position of the node
            </Typography>
          </Box>
        </Fade>
    </Container>
  );
}
