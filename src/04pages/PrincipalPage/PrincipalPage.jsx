import React from "react";
import "./PrincipalPage.css";
import Button from "../../01uikit/Button/Button";
import { Link } from "react-router-dom";
import Principal from "../../03templates/Principal/Principal";
import Header2 from "../../02components/Header/Header2";


export const PrincipalPage = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="header">
          <Header2 />
        </div>
        <div className="main">
          <div className="row">
          <Principal />
          
          

          </div>
        </div>
        
      </div>
    </div>
  );
};
export default PrincipalPage;
