import React from "react";
import "./NodeInfo.css";
import TopMenuBar from "../components/TopMenuBar";
import BottomMenuBar from "../components/BottomMenuBar";
import { LinkContainer } from "react-router-bootstrap"

import { List, ListItem } from '@material-ui/core';

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

  return (
    <div className="homePage">
      <TopMenuBar block pageName={"Node info"} hamburgerMenu={true} closeButtonOnly={false} closeWithPrompt={false} backButton={true} backRoutePage="/"/>
      <BottomMenuBar block/>
      <List>
        <ListItem>
          Node id = {selectedNode.id}
        </ListItem>
        <ListItem>
          Node name = {selectedNode.name}
        </ListItem>
        <ListItem>
          Node group = {selectedNode.group}
        </ListItem>
        <ListItem>
          Node status = {selectedNode.status}
        </ListItem>
        <ListItem>
          Node position = X:{selectedNode.x} Y:{selectedNode.y} Z:{selectedNode.z}
        </ListItem>
      </List>
    </div>
  );
}
