import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../01uikit/Button/Button";
import "./UserAvatar.css";

const UserAvatar = () => {
  return (
    <div className="avatar-container">
      <Link to="/login">
      <Button text="Ingresar" />
        
      </Link>
    </div>
  );
};

export default UserAvatar;
