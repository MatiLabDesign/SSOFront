import React from "react";
import "./NuevoPage.css";
import Button from "../../01uikit/Button/Button";
import { Link, Outlet } from "react-router-dom";
import Principal from "../../03templates/Principal/Principal";
import Header2 from "../../02components/Header/Header2";
import ClienteForm from "../../02components/Forms/ClienteForm/ClienteForm";


export const NuevoPage = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="header">
          <Header2 />
        </div>
        <div className="main">
          <div className="row">
          <Principal />
          <ClienteForm/>
          

          </div>
        </div>
        
      </div>
    </div>
  );
};
export default NuevoPage;
