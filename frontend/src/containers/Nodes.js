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

const nodes = [{
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
},];

const nodeloader = () =>{

}

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

export default function Nodes() {
  nodeloader()
  var user = Firebase.auth().currentUser;

  if (user) {
    const uid = user.uid;

    Firebase.firestore().collection(uid).get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        let nodedata = doc.data();
        let idn = nodedata.quantified.id;
        let groupn = nodedata.group;
        let namen = nodedata.name;
        let statusn = "Online"; //nodedata.status
        let xn = 65; //nodedata.x
        let yn = 75; //nodedata.y
        let zn = 10; //nodedata.z

        let newNode = {
          id: idn,
          //key: idn,
          name: namen,
          group: groupn,
          status: statusn,
          x: xn,
          y: yn,
          z: zn
        };

        nodes.push(newNode);

      });
      offlineNodes= nodes.filter((node) => node.status === 'Offline');
      onlineNodes = nodes.filter((node) => node.status === 'Online');
      isLoaded = true;
      console.log(isLoaded)
    })

  }else{

  }
  console.log(nodes);
  console.log(offlineNodes);
  console.log(onlineNodes);
  const classes = useStyles();



  return (
      <div>
        <TopMenuBar block pageName="Nodes" hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false}
                    backButton={true} backRoutePage="/"/>
        <Paper id="nodesList">
          <List color="primary">
            <ListSubheader disableSticky='true'>Offline nodes</ListSubheader>
            {console.log("Here now")}
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
