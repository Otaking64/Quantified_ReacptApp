import React from "react";
import "./Installation.css";
import NodeIcon from '../icons/icon_node';
import { Grid, Paper, Button, Fab, Box, Divider, Container, Typography } from '@material-ui/core';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import { makeStyles  } from '@material-ui/core/styles';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import FakeTemp from "../components/fakeTemp";

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
  root:{
    flexGrow: 1,
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  height: {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    zIndex: 0,
  },
  width:{
    maxWidth:'100%',
    width: '100%',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    padding: theme.spacing(2)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  stretchGrid: {
    height: '100%',
    width: '100%',
  },
  topButton:{
    minWidth: '100%',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(10),
  },
  allButton:{
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  remMargin: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  largeIcon: {
    width:'35px',
    height: '35px'
  }
}));

export default function Home() {
  const offlineNodes = nodes.filter((node) => node.status === 'Offline');
  const onlineNodes = nodes.filter((node) => node.status === 'Online');
  const classes = useStyles();

  return (
    <main>
    <header>
      <TopMenuBar
      block pageName="Home" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={false} backRoutePage="/"/>
      </header>
      <body className={classes.height}>
        <div className={classes.root}>
          <Box display="flex"
            flexGrow={3}
            className={classes.topButton}
            >
              <Paper className={classes.width}>
                <Box p={1}>
                  <Typography align="center" variant="h5" gutterBottom>
                    OVERVIEW
                  </Typography>
                    <Divider fullWidth/>
                  <Typography variant="h6">
                    Actual temperature:
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <FakeTemp />
                  </Typography>
                  <Typography variant="h6">
                    Online nodes:
                  </Typography>
                  <Typography variant="body2">
                    15 nodes online
                  </Typography>
                </Box>
              </Paper>
            </Box>
            <Box
              display="flex"
              flexGrow={1}
              style={{width: '100vw',
                    maxWidth: '100%',
                    }}
              >
                <Grid container>
                  <Grid item container xs={12} spacing={2} className={classes.allButton}>
                    <Grid item xs={6} md={12} lg={12} align="center">
                      <LinkContainer to="/dashboard">
                        <Button variant="outlined" color="primary" className={classes.stretchGrid}>
                          <div>
                          <DashboardIcon fontSize="large"/>
                          <Typography variant="h6">Dashboard</Typography>
                          </div>
                        </Button>
                        </LinkContainer>
                      </Grid>
                    <Grid item xs={6} md={12} lg={12} align="center">
                      <LinkContainer to="/nodes">
                        <Button variant="outlined" size="large" color="primary" className={classes.stretchGrid}>
                          <div>
                          <NodeIcon className={classes.largeIcon}/>
                          <Typography variant="h6">Nodes</Typography>
                          </div>
                        </Button>
                      </LinkContainer>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
          </div>
      </body>
      </main>
  );
}
