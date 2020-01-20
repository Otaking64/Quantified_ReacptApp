import React from "react";
import "./NodeInfo.css";
import TopMenuBar from "../components/TopMenuBar";
import BottomMenuBar from "../components/BottomMenuBar";
import { LinkContainer } from "react-router-bootstrap";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, Badge, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

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
  let nodeId = props.match.params.nodeId;
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
  const selectedNode = nodes.filter((node) => node.id === nodeId)[0];
  const classes = useStyles();

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap
          defaultZoom={8}
          defaultCenter={{ }}
      >
          {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
      </GoogleMap>
  ))

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
      <BottomMenuBar slectedIcon={0} block/>
      <List>
        <ListItem>
          <p className="boldText bigText">Node ID {selectedNode.id}</p>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel htmlFor="component-simple">Name</InputLabel>
            <Input id="component-simple" defaultValue={selectedNode.name} className={classes.inputFieldText} />
          </FormControl>
        </ListItem>
        <ListItem>
          <FormControl>
            <InputLabel htmlFor="component-simple">Group</InputLabel>
            <Input id="component-simple" defaultValue={selectedNode.group} className={classes.inputFieldText} />
          </FormControl>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <StyledBadge classes={{ badge: selectedNode.status }} badgeContent=" ">
              <p>{selectedNode.status === "Online"?"Online":"Offline"}</p>
            </StyledBadge>
          </ListItemAvatar>
        </ListItem>
        <ListItem>
          <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '70px', width: '70px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
          />
          <p className="coordinates">X:{selectedNode.x} Y:{selectedNode.y} Z:{selectedNode.z}</p>
        </ListItem>
        <ListItem>
          <Button variant="contained" color="primary" className={classes.saveButton} onClick={saveNode()}>
            Save
          </Button>
          <Button variant="outlined" className={classes.deleteButton} onClick={deleteNode()}>
            Delete
          </Button>
        </ListItem>
      </List>
    </div>
  );
}
