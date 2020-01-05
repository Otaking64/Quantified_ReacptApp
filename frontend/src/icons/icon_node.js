import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const NodeIcon = ({
  style = {},
  width = "",
  color = "#fff",
  className = "",
  height = "",
}) => (
  <SvgIcon
  width = {width}
  style = {style}
  height = {height}
  className = {className}
  color = {color}
  viewBox="0 0 24 24"
  >
  <path d="M16.34,12c0-3.15.95-3.64.95-6.65h0A5.29,5.29,0,1,0,6.71,5.23v.12c0,3,1,3.5,1,6.65s-1,3.64-1,6.65a5.29,5.29,0,1,0,10.58.12v-.12h0C17.29,15.64,16.32,15.15,16.34,12ZM12,7.31a2.26,2.26,0,1,1,2.26-2.26A2.26,2.26,0,0,1,12,7.31Z"/>
  </SvgIcon>
)

export default NodeIcon;
