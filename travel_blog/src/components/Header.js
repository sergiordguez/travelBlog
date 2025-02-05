import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Travel Album</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
