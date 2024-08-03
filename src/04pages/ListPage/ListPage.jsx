import React from "react";
import "./ListPage.css";
import ClienteList from "./../../02components/Lists/ClienteList/ClienteList";
import Principal from "../../03templates/Principal/Principal";
import Header2 from "../../02components/Header/Header2";

const ListPage = () => {
  return (
    <>
      <div className="grid-container">
        <div className="header">
          <Header2/>
        </div>
        <div className="main">
          <div className="row">
            <Principal/>
            <ClienteList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPage;
