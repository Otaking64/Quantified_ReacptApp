import React from "react";
import "./BottomMenuBar.css";

import { Home as HomeIcon, ContactSupport as ContactSupportIcon, Dashboard as DashboardIcon } from '@material-ui/icons';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { LinkContainer } from "react-router-bootstrap";

export default function BottomMenuBar() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className="bottomMenuBar"
    >
      <LinkContainer to="/">
        <BottomNavigationAction label="Nodes" icon={<HomeIcon className="icon" />} />
      </LinkContainer>
      <LinkContainer to="/dashboard">
        <BottomNavigationAction label="Dashboard" icon={<DashboardIcon className="icon" />} />
      </LinkContainer>
      <LinkContainer to="/faq">
        <BottomNavigationAction label="FAQ" icon={<ContactSupportIcon className="icon" />} />
      </LinkContainer>
    </BottomNavigation>
  );
}
