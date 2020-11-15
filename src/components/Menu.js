import React from "react";
import { Link } from "react-router-dom";
import "./Menu.component.css";

const Menu = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="font-weight-bold">
          <span className="rcarrenho">
            R<span>C</span>ARRENHO
          </span>
        </Link>
        <div>
          <ul className="menu-list">
            <li>
              <Link to="/" className="nav-link font-weight-bold">
                Tarefas
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link font-weight-bold">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
