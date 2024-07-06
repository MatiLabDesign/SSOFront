import React from "react";
import Logo from "./Logo/Logo";
import UserAvatar from "./UserAvatar/UserAvatar";
import Navbar from './Navbar/Navbar';
import "./Header.css";

const Header2 = () => {
  return (
    <div>
      <div className="upbar">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu"></div>
        <div className="avatar">
          {/* <UserAvatar /> */}
        </div>
      </div>
      {/* <Navbar/> */}
    </div>
  );
};

export default Header2;