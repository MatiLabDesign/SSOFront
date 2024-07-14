import React from "react";
import "./Principal.css";
import SideMenu from "../../02components/SideMenu/SideMenu";

const Principal = () => {
  

  return (
    <div className="principal-grid-container">
      <div className="sidebar"> 
        
        <SideMenu/>
         
      </div>
      <div className="main">
        
      </div>
      
    </div>
  );
};

export default Principal;
