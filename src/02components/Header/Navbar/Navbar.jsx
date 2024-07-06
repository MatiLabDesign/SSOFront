import React from "react";
import "./Navbar.css";


const Navbar = () => {
  const href = "#";

  return (
    <div className="container__menu">
      <div className="menu">
        <div className="nav-menu">
          <ul className="menu-ul">
            <li className="menu-li">
              <a href="#nosotros">Nosotros</a>
              <ul>
                <li className="submenu-link">
                  <a className="menu-click" href="#">
                    Misión
                  </a>
                </li>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    Visión
                  </a>
                </li>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    Nosotros
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-li">
              <a href="#servicios">Servicios</a>
              <ul>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    CPC
                  </a>
                </li>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    UCL
                  </a>
                </li>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    Bombas Mecánicas
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-li">
              <a href="#politicas">Politicas</a>
              <ul>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    De calidad
                  </a>
                </li>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    De seguridad
                  </a>
                </li>
                <li className="submenu-link">
                  <a className="menu-click" href={href}>
                    De medio ambiente
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
