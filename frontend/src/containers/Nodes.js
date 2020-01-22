import React from "react";
import nodeIcon from '../icons/node.png';
import "./Nodes.css";
import { Button, List, ListItem, ListItemText, ListItemAvatar, ListSubheader, Badge, Box, Paper } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { LinkContainer } from "react-router-bootstrap"
import TopMenuBar from "../components/TopMenuBar";
import Firebase from "firebase";

let offlineNodes;
let onlineNodes;
let isLoaded = false;

const nodes = [];



const useStyles = makeStyles(theme => ({
  button: {
    width: '100%',
    height: '100%',
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 30,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    height: '15px',
    minWidth: '15px',
  },
}))(Badge);

export default function Nodes(props) {

  const[loaded, isItLoaded] = React.useState(false);



  var user = Firebase.auth().currentUser;

  if (user) {
    const uid = user.uid;

    Firebase.firestore().collection(uid).get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        let nodedata = doc.data();
        let idn = nodedata.quantified.id;
        let groupn = nodedata.group;
        let namen = nodedata.name;
        let statusn = "Online"; //nodedata.status
        let xn = nodedata.x;
        let yn = nodedata.y;
        let zn = nodedata.z;
        let nodeExists = false;
        let newNode = {
          id: idn,
          key: idn,
          name: namen,
          group: groupn,
          status: statusn,
          x: xn,
          y: yn,
          z: zn
        };

        nodes.forEach(function (n) {
          if(n.key === idn){
             nodeExists = true;
          }else{
            //nothing, node is already in the list
          }
        })

        if (!nodeExists){
          nodes.push(newNode);
        }




      });
      offlineNodes= nodes.filter((node) => node.status === 'Offline');
      onlineNodes = nodes.filter((node) => node.status === 'Online');
      isLoaded = true;
      isItLoaded(true);
    })

  }else{

  }
  const classes = useStyles();



  return (
      <div>
        <TopMenuBar block pageName="Nodes" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false}
                    backButton={true} backRoutePage="/"/>
        <Paper id="nodesList">
          <List color="primary">
            <ListSubheader disableSticky='true'>Offline nodes</ListSubheader>
            {isLoaded && offlineNodes.map((node) =>
                <LinkContainer to={"/nodeInfo/" + node.id}>
                  <ListItem className="noPadding">
                    <ListItemAvatar>
                      <StyledBadge classes={{badge: "offline"}} badgeContent=" ">
                        <img src={nodeIcon} alt="nodeIcon" className="nodeListNodeIcon"/>
                      </StyledBadge>
                    </ListItemAvatar>
                    <ListItemText primary={node.name} secondary={node.group}/>
                  </ListItem>
                </LinkContainer>
            )}
            <ListSubheader disableSticky='true'>Online nodes</ListSubheader>
            {isLoaded && onlineNodes.map((node) =>
                <LinkContainer to={"/nodeInfo/" + node.id}>
                  <ListItem className="noPadding">
                    <ListItemAvatar>
                      <StyledBadge classes={{badge: "online"}} badgeContent=" ">
                        <img src={nodeIcon} alt="nodeIcon" className="nodeListNodeIcon"/>
                      </StyledBadge>
                    </ListItemAvatar>
                    <ListItemText primary={node.name} secondary={node.group}/>
                  </ListItem>
                </LinkContainer>
            )}
          </List>
        </Paper>
        <Box className="buttonContainer">
          <LinkContainer to="/installation">
            <Button variant="contained" size="large" color="primary" className={classes.button}>
              <img src={nodeIcon} alt="nodeIcon" className="customNodeIcon"/>
              Add nodes
            </Button>
          </LinkContainer>
        </Box>
      </div>
  );
}
