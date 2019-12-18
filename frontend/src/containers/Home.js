import React from "react";
import nodeIcon from '../icons/node.png';
import dashboardIcon from '../icons/dashboard_18dp.png';
import supportIcon from '../icons/support_18dp.png';
import profileIcon from '../icons/account_18dp.png';
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap"

export default function Home() {
  return (
    <div className="App">
      <header className="header">
        <p className="headerTitle">Home</p>
      </header>
      <div className="wrapper">
        <button className="nodesButton">
          <img src={nodeIcon} className="node-icon" alt="logo" />
          <p className="nodeText">Node options</p>
        </button>
      </div>
      <div className="footer">
        <button className="footerButton">
          <img src={profileIcon} className="footer-icon" alt="logo" />
          Profile
        </button>
        <LinkContainer to="/step1">
          <button className="footerButton">
            <img src={dashboardIcon} className="footer-icon" alt="logo" />
            Installatie
          </button>
        </LinkContainer>
        <button className="footerButton">
          <img src={supportIcon} className="footer-icon" alt="logo" />
          FAQ
        </button>
      </div>
    </div>
  );
}
