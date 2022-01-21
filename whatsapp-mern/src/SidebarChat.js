import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Vanshaj</h2>
        <p>Hey! This is the clone of the whatsapp</p>
      </div>
    </div>
  );
}

export default SidebarChat;
