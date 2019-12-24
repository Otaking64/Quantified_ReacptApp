import React, {Component} from "react";
import {LinearProgress, Box, Typography} from '@material-ui/core';

class LinearBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: "0",
    }
  }
  render(){
    return(
      <Box width={300} align="center">
        <Typography variant="overline">Progress</Typography>
        <LinearProgress variant="determinate" value={this.state.value}/>
      </Box>
    );
  }
}

export default LinearBar;
