import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//component for FAQ
const ExpansionCard = ({
  title = "This is a title",
  body = "This is a body",
}) => (
  <ExpansionPanel>
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
    >
      <Typography>{title}</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography>
        {body}
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

export default ExpansionCard;
