import React from "react";
import "./Installation.css";
import NodeIcon from '../icons/icon_node';
import { Grid, Paper, Button, Box, Divider, Typography } from '@material-ui/core';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import { makeStyles  } from '@material-ui/core/styles';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import FakeTemp from "../components/fakeTemp";
import Firebase from "firebase";


let amountOfNodes = 0;
let nodeIdList = [];

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


export default function Home(props) {
  console.log(nodeIdList);

  const classes = useStyles();

  const[isloaded, isItLoaded] = React.useState(false);
  let loaded = false;

  var user = Firebase.auth().currentUser;

  if (user) {
    const uid = user.uid;
    Firebase.firestore().collection(uid).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        let nodedata = doc.data();
        let idn = doc.id;
        let nodeExists = false;

        let newNode ={
          id: idn,
        };


        nodeIdList.forEach(function (n) {
          if(n.id === idn){
            nodeExists = true;
          }else if (idn ==="nodes"){
            nodeExists = true;
          }else{
            //nothing, node is already in the list
          }
        });

        if (!nodeExists){
          nodeIdList.push(newNode);
          if(amountOfNodes){
            amountOfNodes++;
          }else{
            amountOfNodes = 1;

            loaded = true;
          }
        }

      });


      if(loaded){
        console.log(amountOfNodes);
        isItLoaded(true);
        if(amountOfNodes === 0){
          props.history.push("/installation")

        }

      }
    })

  }else {
    //props.history.push('/login');
  }

  return (
    <main>
    <header>
      <TopMenuBar
      block pageName="Home" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={false} backRoutePage="/"/>
      </header>
      <div className={classes.height}>
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
                  <Divider fullwidth/>
                  <Typography variant="h6">
                    Actual temperature:
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <FakeTemp />&#x2103;
                  </Typography>
                  <Typography variant="h6">
                    Online nodes:
                  </Typography>
                  <Typography variant="body2">
                    {amountOfNodes}
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
      </div>
      </main>
  );
}
