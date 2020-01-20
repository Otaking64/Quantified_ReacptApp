import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Typography,
  Card,
  CardHeader,
  CardActionArea,
  Avatar,
  Button,
  ButtonGroup,
} from '@material-ui/core';
import TopMenuBar from '../components/TopMenuBar.js'
import {LinkContainer} from 'react-router-bootstrap';
import NodeIcon from "../icons/icon_node.js";
import RouterIcon from '@material-ui/icons/Router';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  section1: {
    margin: theme.spacing(2),
  },
  section2: {
    margin: theme.spacing(3),
    alignItems: "center",
  },
  section3:{
    margin: theme.spacing(1),
  },
  avatarColor:{
    backgroundColor:'#fff',
  },
}));

export default function FAQ() {
  const classes = useStyles();

  return (
    <>
      <TopMenuBar block pageName="FAQ" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
      <Card className={classes.section1}>
      <LinkContainer to="/faq/node">
        <CardActionArea>
        <CardHeader
          avatar={
            <Avatar className={classes.avatarColor} aria-label="nodes">
              <NodeIcon color="primary" />
            </Avatar>
          }
          title={
            <Typography variant="body1">Node Troubleshoot</Typography>
          }
          />
          </CardActionArea>
          </LinkContainer>
      </Card>
      <Card className={classes.section1}>
      <LinkContainer to="/faq/node">
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar className={classes.avatarColor} aria-label="nodes">
              <RouterIcon color="primary" />
            </Avatar>
          }
          title={
            <Typography variant="body1">Gateway Troubleshoot</Typography>
          }
          />
          </CardActionArea>
          </LinkContainer>
      </Card>
      <Card className={classes.section1}>
            <LinkContainer to="/faq/node">
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar className={classes.avatarColor} aria-label="nodes">
              <PersonIcon color="primary" />
            </Avatar>
          }
          title={
            <Typography variant="body1">Profile Troubleshoot</Typography>
          }
          />
          </CardActionArea>
          </LinkContainer>
      </Card>

      <Divider variant="middle"/>
      <div className={classes.section2} align="center">
        <Typography variant="h5">Problem not found?</Typography>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical outlined primary button group"
          className={classes.section3}
        >
        <Button
          className={classes.button}
          startIcon={<PhoneIcon />}
          href="tel:+31651775925"
        >
          Call us
        </Button>
        <Button
          className={classes.button}
          startIcon={<MailIcon />}
          href="mailto:info@quantified.eu?Subject=App%20problem"
          target="_top"
        >
          Send us an email
        </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
