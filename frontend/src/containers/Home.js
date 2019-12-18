import React from "react";
import nodeIcon from '../icons/node.png';
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap"

export default function Home() {
  return (
    <div className="App">
      <div className="nodeInfoField">
        <p>node Information</p>
      </div>
      <div className="wrapper">
        <button className="nodesButton">
          <img src={nodeIcon} className="node-icon" alt="logo" />
          <p className="nodeText">Node options</p>
        </button>
      </div>
    </div>
  );
}
