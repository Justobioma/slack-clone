import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessAlarmsIcon from "@material-ui/icons/AccessAlarms";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        {/* Avatars for logged in users*/}
        <Avatar
          className="header_avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* Time icon*/}
        <AccessAlarmsIcon />
      </div>
      <div className="header_search">
        <SearchIcon />

        <input placeholder="Search Omagweb Solutions" />
      </div>
      <div className="header_right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
