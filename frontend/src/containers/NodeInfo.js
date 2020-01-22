import React from "react";
import "./NodeInfo.css";
import TopMenuBar from "../components/TopMenuBar";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, Badge, FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import Firebase from "firebase";

const useStyles = makeStyles(theme => ({

  inputFieldText: {
    fontSize: "1em"
  },
  saveButton: {
    marginRight: '16px',
    marginTop: '10px'
  },
  deleteButton: {
    color: '#FF0000',
    borderColor: '#FF0000',
    marginTop: '10px'
  }
}));

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -5,
    top: 16,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 2px',
    height: '11px',
    minWidth: '11px',
  },
}))(Badge);

export default function NodeInfo(props) {
  const[itLoaded, isItLoaded] = React.useState(false);

  Firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User is signed in");

    } else {
      console.log("User is not signed in");
      props.history.push("/login")
    }
  });
  let nodeId = props.match.params.nodeId;
  const nodes = [];
  let selectedNode;
  let loaded = false;

  var user = Firebase.auth().currentUser;

  if (user) {
    const uid = user.uid;

    Firebase.firestore().collection(uid).get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        let nodedata = doc.data();
        let idn = doc.id;
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
          }else if (idn ==="nodes"){
            nodeExists = true;
          }else{
            //nothing, node is already in the list
          }
        });

        if (!nodeExists){
          nodes.push(newNode);
        }
        console.log(loaded);
        selectedNode = nodes.filter((node) => node.id === nodeId)[0];
        console.log(selectedNode);
        if (selectedNode){
          console.log(selectedNode)


        }
        console.log(nodeId)

      });

      isItLoaded(true);
      if(isItLoaded){
        loaded = true;
      }
      console.log(loaded)

      console.log(itLoaded)
    })

  }else{

  }

  const classes = useStyles();

  //const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  //    <GoogleMap
  //       defaultZoom={8}
  //       defaultCenter={{ }}
  //  >
  //        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  //    </GoogleMap>
  //))

  async function handleChange() {
    //update the database by sending the new value to the API
  }

  async function deleteNode() {
    //Delete the node in the database
  };

  async function saveNode() {
    //Delete the node in the database
  };

  return (
    <div className="nodInfoPage">
      <TopMenuBar block pageName={"Node info"} hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/nodes"/>
      {loaded && (<List>{console.log("rendering")}
        <ListItem>
          <Typography variant="body1" className="boldText bigText">Node ID {loaded && (selectedNode.id)}</Typography>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" defaultValue={loaded && (selectedNode.name)} className={classes.inputFieldText}/>
          </FormControl>
          {console.log("rendering again")}
          {console.log(selectedNode.id)}
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel htmlFor="component-simple">Group</InputLabel>
            <Input id="component-simple" defaultValue={loaded && (selectedNode.group)} className={classes.inputFieldText} />
          </FormControl>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <StyledBadge classes={loaded && ({ badge: selectedNode.status })} badgeContent=" ">
              <p>{loaded && (selectedNode.status === "Online"?"Online":"Offline")}</p>
            </StyledBadge>
          </ListItemAvatar>
        </ListItem>
        <ListItem>
           <Typography variant="body1" className="coordinates">X:{loaded && (selectedNode.x)} Y:{loaded && (selectedNode.y)} Z:{loaded && (selectedNode.z)}</Typography>
        </ListItem>
        <ListItem>
          <Button variant="contained" color="primary" className={classes.saveButton} onClick={saveNode()}>
            Save
          </Button>
          <Button variant="outlined" className={classes.deleteButton} onClick={deleteNode()}>
            Delete
          </Button>
        </ListItem>
      </List>)}
    </div>
  );
}
