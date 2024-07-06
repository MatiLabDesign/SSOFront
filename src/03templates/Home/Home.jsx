import React from "react";
import "./Home.css";
import Header from "../../02components/Header/Header";
import SideMenu from "../../02components/SideMenu/SideMenu";

const Home = () => {
  const onClick1 = () => {
    console.log("hola!!");
  };

  return (
    <div className="grid-container">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <SideMenu />
      </div>
      <div className="main">
        
      </div>
      <div className="footer">
        
      </div>
    </div>
  );
};

export default Home;
