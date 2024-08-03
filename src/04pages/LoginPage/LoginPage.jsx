import React from "react";
import "./LoginPage.css";
import Header2 from "../../02components/Header/Header2";
import LoginForm from "../../02components/Forms/LoginForm";
import ClienteForm from "../../02components/Forms/ClienteForm/ClienteForm";

const LoginPage = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="header">
          <Header2 />
        </div>
        <div className="main">
          <div className="row2">
            <LoginForm />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
