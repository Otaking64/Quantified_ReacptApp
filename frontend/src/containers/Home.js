import React from "react";
import NodeIcon from '../icons/icon_node';
import { Grid, Paper, Button, Fab, Box, Container } from '@material-ui/core';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import { withStyles, makeStyles  } from '@material-ui/core/styles';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import BottomMenuBar from "../components/BottomMenuBar";

const nodes = [
  {
    id: '1FG5dh7h1',
    name: 'FakeNode 1',
    group: 'Tomatoes',
    status: 'Offline',
    x: 65,
    y: 45,
    z: 10
  },{
    id: '1FG5dh7h2',
    name: 'FakeNode 2',
    group: 'Carrots',
    status: 'Online',
    x: 45,
    y: 45,
    z: 10
  },{
    id: '1FG5dh7h3',
    name: 'FakeNode 3',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 55,
    z: 10
  },{
    id: '1FG5dh7h4',
    name: 'FakeNode 4',
    group: 'Carrots',
    status: 'Online',
    x: 45,
    y: 55,
    z: 10
  },{
    id: '1FG5dh7h5',
    name: 'FakeNode 5',
    group: 'Carrots',
    status: 'Offline',
    x: 45,
    y: 65,
    z: 10
  },{
    id: '1FG5dh7h6',
    name: 'FakeNode 6',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 65,
    z: 10
  },{
    id: '1FG5dh7h7',
    name: 'FakeNode 7',
    group: 'Tomatoes',
    status: 'Online',
    x: 65,
    y: 75,
    z: 10
  },
];

const useStyles = makeStyles(theme => ({
  home: {
    height: '100%'
  },
  homePaper: {
    height: '380px'
  },
  buttonGrid: {
    padding: '0px 14px',
    textAlign: 'center'
  },
  button: {
    width: '100%',
    height: '100%'
  },
  nodeCount: {
    width: '100%',
    textAlign: 'center',
    fontSize: '2em',
    color: 'gray',
    borderBottom: '1px solid #CCCCCC',
    borderRadius: '0'
  },
  rightBorder: {
    borderRight: '1px solid #CCCCCC',
  },
  nodesCountTitle: {
    fontSize: '0.4em'
  }
}));

export default function Home() {
  const offlineNodes = nodes.filter((node) => node.status === 'Offline');
  const onlineNodes = nodes.filter((node) => node.status === 'Online');
  const classes = useStyles();

  return (
    <Container>
      <TopMenuBar block pageName="Home" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={false} backRoutePage="/"/>
      <Paper className={classes.homePaper}>
        <Grid container spacing={0} justify="space-evenly" alignItems="stretch">
          <Grid item xs={6} className={classes.rightBorder}>
            <LinkContainer to="/nodes">
              <Button component="span" className={classes.nodeCount}>
                <Grid container spacing={0} className={classes.buttonGrid}>
                  <Grid item xs={12}>
                    {onlineNodes.length}/{nodes.length}
                  </Grid>
                  <Grid item xs={12} className={classes.nodesCountTitle}>
                    Online nodes
                  </Grid>
                </Grid>
              </Button>
            </LinkContainer>
          </Grid>
          <Grid item xs={6}>
            <LinkContainer to="/nodes">
              <Button component="span" className={classes.nodeCount}>
                <Grid container spacing={0} className={classes.buttonGrid}>
                  <Grid item xs={12}>
                    {offlineNodes.length}/{nodes.length}
                  </Grid>
                  <Grid item xs={12} className={classes.nodesCountTitle}>
                    Offline nodes
                  </Grid>
                </Grid>
              </Button>
            </LinkContainer>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={1} className={classes.buttonGrid}>
        <Grid item xs={6}>
          <LinkContainer to="/dashboard">
            <Button variant="contained" color="primary" className={classes.button}>
              <Grid container spacing={0} className={classes.buttonGird}>
                <Grid item xs={12}>
                  <DashboardIcon className="icon"/>
                </Grid>
                <Grid item xs={12}>
                  Dashboard
                </Grid>
              </Grid>
            </Button>
          </LinkContainer>
        </Grid>
        <Grid item xs={6}>
          <LinkContainer to="/installation">
            <Button variant="contained" color="primary" className={classes.button}>
              <Grid container spacing={0} className={classes.buttonGrid}>
                <Grid item xs={12}>
                  <NodeIcon color="white"/>
                </Grid>
                <Grid item xs={12}>
                  Add nodes
                </Grid>
              </Grid>
            </Button>
          </LinkContainer>
        </Grid>
      </Grid>
      </Container>
  );
}
