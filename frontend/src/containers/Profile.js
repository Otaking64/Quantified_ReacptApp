import React from "react";
import arrowBackIcon from './icons/arrow_back_18dp.png';
import menuIcon from './icons/menu_18dp.png';
import saveIcon from './icons/save_18dp.png';
import dashboardIcon from './icons/dashboard_18dp.png';
import supportIcon from './icons/support_18dp.png';
import profileIcon from './icons/account_18dp.png';
import "./Profile.css";

export default function Profile() {
  return (
    <div className="App">
      <header className="header">
        <button className="backButton">
          <img src={arrowBackIcon} className="backButton-icon" alt="back" />
        </button>
        <p className="headerTitle">Profile</p>
        <button className="menuButton">
          <img src={menuIcon} className="menuButton-icon" alt="menu" />
        </button>
      </header>
      <div className="infoContainer">
        <p className="titlename">Name</p>
        <p className="infoElement">Quenten Zandvliet</p>
        <p className="titlename">Email</p>
        <p className="infoElement">quentenzandvliet@me.com</p>
        <p className="titlename">ETC.</p>
        <p className="infoElement">(De rest van de gebruiker informatie)</p>
      </div>
      <div className="optionsContainer">
        <p className="infoElement">Open dashboard when starting the app</p>
        <button className="sliderButton"/>
      </div>
      <button className="saveButton">
        <img src={saveIcon} className="saveButton-icon" alt="save" />
        <p className="saveButtonText">Save settings</p>
      </button>
      <div className="footer">
        <button className="footerButton">
          <img src={profileIcon} className="footer-icon" alt="logo" />
          Profile
        </button>
        <button className="footerButton">
          <img src={dashboardIcon} className="footer-icon" alt="logo" />
          Dashboard
        </button>
        <button className="footerButton">
          <img src={supportIcon} className="footer-icon" alt="logo" />
          FAQ
        </button>
      </div>
    </div>
  );
}
