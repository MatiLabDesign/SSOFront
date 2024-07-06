import React from "react";
import "./HomePage.css";
import Button from "../../01uikit/Button/Button";
import Header from "../../02components/Header/Header";
import { Link } from "react-router-dom";
import foto from './trinoil.jpeg';
import Footer from "../../02components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="header">
          <Header/>
        </div>
        <div className="main">
          <div className="foto">
            
          </div>
          <section id="nosotros" className="section1">
            Nosotros
          </section>
          <section id="servicios" className="section2">
            Servicios
          </section>
          <section id="politicas" className="section3">
            Politicas
          </section>
          <div className="footer"><Footer/></div>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
