import React from "react";
import { Avatar } from "@material-ui/core";
import avatar from "../images/avatar.png";

function Profile() {
  return (
    <Avatar
      alt="Ryan McGouran"
      src={avatar}
      style={{
        width: 200,
        height: 200,
        position: "relative",
        left: "50%",
        top: "20%",
        transform: "translate(-50%, -50%)",
        marginBottom: "5px",
      }}
    />
  );
}

export default Profile;
